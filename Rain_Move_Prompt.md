Write a p5.js simulation according to these specs:

- Canvas size: 1000 × 600 pixels, representing a 10 m horizontal span (100 px = 1 m).
- Person: a red rectangle whose height is five times its width, entering from the left at a constant speed (e.g. 1 m/s), moving straight to the right without looping back.
- Rain: blue circular drops continuously generated across the full canvas width, characterized by two parameters:
  1. fall speed (m/s)
  2. density (drops per meter per second)
- At the top of your code, declare three adjustable constants: PERSON_SPEED, RAIN_SPEED, RAIN_DENSITY, plus PERSON_DELAY (seconds before the person enters).
- Rain starts immediately; after PERSON_DELAY seconds the person begins walking into the falling rain.
- For each frame, update positions using real time (deltaTime), generate new drops, and remove drops when they fall offscreen.
- Collision detection:
  • Count drops hitting the top edge of the person’s rectangle.
  • Count drops hitting the front (right) side as the person moves.
  Remove any drop upon collision.
- Display on–screen counters for “top collisions,” “front collisions,” and elapsed time.

Create a single HTML file with all necessary code, including the p5.js library. The code should be clean, modular, and easy to understand. Use object-oriented design where appropriate. Use this js file: https://cdn.jsdelivr.net/npm/p5@1.11.5/lib/p5.min.js
