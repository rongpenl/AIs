// Adjustable parameters:
const PERSON_SPEED = 1;    // Person's walking speed in meters per second
const RAIN_SPEED   = 5;    // Rain drop fall speed in meters per second
const RAIN_DENSITY = 10;   // Number of rain drops per meter per second
const PERSON_DELAY = 2;    // Delay before the person enters the rain in seconds

// Canvas dimensions in pixels
const CANVAS_WIDTH  = 1000;
const CANVAS_HEIGHT = 600;

// Conversion scale: 100 pixels = 1 meter
// Therefore, the canvas width of 1000 pixels represents 10 meters
const SCALE = CANVAS_WIDTH / 10; // Pixels per meter

// Person dimensions: height is 5 times width
const PERSON_WIDTH  = 20;            // In pixels (adjustable)
const PERSON_HEIGHT = PERSON_WIDTH * 5;

// Initial person position: starts off-screen to the left
let person = {
  x: -PERSON_WIDTH,
  y: CANVAS_HEIGHT - 50 - PERSON_HEIGHT, // 50 pixels above bottom
  width: PERSON_WIDTH,
  height: PERSON_HEIGHT
};

// Accumulator for fractional rain drop generation
let rainDropAccum = 0;

// Array to store all rain drops; each drop is { x, y, prevY }
let raindrops = [];

// Counters for collisions on the top and front of the person
let topCollisionCount   = 0;
let frontCollisionCount = 0;

// Total elapsed time in seconds
let timeElapsed = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
  background(220);
  // Convert deltaTime from milliseconds to seconds
  let dt = deltaTime / 1000;
  timeElapsed += dt;

  // Determine if the person should be active (entered rain and still on canvas)
  let personActive = (timeElapsed >= PERSON_DELAY && person.x <= CANVAS_WIDTH);

  // Variables to track the person's previous and current front x-coordinate
  let previousFront = null;
  let newFront = null;
  if (personActive) {
    previousFront = person.x + person.width;
    // Update person position based on speed
    person.x += PERSON_SPEED * SCALE * dt;
    newFront = person.x + person.width;
  }

  // Generate new rain drops based on density and time elapsed
  let dropsPerSecond = RAIN_DENSITY * 10; // 10 meters wide canvas
  let dropsThisFrame = dropsPerSecond * dt;
  rainDropAccum += dropsThisFrame;
  while (rainDropAccum >= 1) {
    // Each drop has a random x across the canvas, starts at y=0
    let drop = {
      x: random(0, width),
      y: 0,
      prevY: 0
    };
    raindrops.push(drop);
    rainDropAccum -= 1;
  }

  // Update rain drops positions and handle collisions/removal
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let drop = raindrops[i];
    drop.prevY = drop.y;
    // Move drop down based on fall speed
    drop.y += RAIN_SPEED * SCALE * dt;

    if (personActive) {
      // Top collision: drop crosses the top edge of the person
      if (drop.prevY < person.y && drop.y >= person.y &&
          drop.x >= person.x && drop.x <= person.x + person.width) {
        topCollisionCount++;
        raindrops.splice(i, 1);
        continue;
      }
      // Front collision: drop is within the swept area of the person's front
      if (drop.x >= previousFront && drop.x < newFront &&
          drop.y >= person.y && drop.y <= person.y + person.height) {
        frontCollisionCount++;
        raindrops.splice(i, 1);
        continue;
      }
    }
    // Remove drops that fall below the canvas
    if (drop.y > height) {
      raindrops.splice(i, 1);
      continue;
    }
  }

  // Draw rain drops as blue circles
  noStroke();
  fill(0, 0, 255);
  for (let drop of raindrops) {
    ellipse(drop.x, drop.y, 5, 5);
  }

  // Draw person as a red rectangle when active
  if (personActive) {
    fill(255, 0, 0);
    rect(person.x, person.y, person.width, person.height);
  }

  // Display collision counters and elapsed time
  fill(0);
  textSize(16);
  text("Top collisions: " + topCollisionCount, 10, 20);
  text("Front collisions: " + frontCollisionCount, 10, 40);
  text("Time: " + nf(timeElapsed, 1, 2) + " s", 10, 60);
}
