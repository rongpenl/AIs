Build a simulation in p5.js where users can drag the mouse to create blocks that fall with gravity and may slide left or right when obstructed.

**Instructions:**

- Use a grid system (grid) composed of small square cells (e.g., 10×10 pixels).
- Initialize a 2D array in setup() to track the state of each cell.
- In draw():
  - Visualize the current grid using rect(), where active cells are black.
  - Update the grid to simulate gravity: active cells fall straight down if possible.
  - If blocked below, they may slide left or right randomly into empty diagonal cells.
- In mouseDragged(), activate the cell at the mouse position.
- Use constrain() to keep all coordinates within the grid boundaries.

**Technical Details:**

- No physics engine needed.
- Use simple array copying to handle grid updates (nextGrid pattern).
- Frame rate can be default or reduced for better visualization.
- Make it a complete HTML file with <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js"></script>

**Expected Result:**

A minimal interactive particle-fall simulation:
- You draw falling “ink” by dragging the mouse.
- Blocks behave like sand or granular matter.
- No UI controls are needed, just mouse input and visual output.

**Deliverable:**

Output a complete self-contained HTML file with all the above functionality. Only use p5.js. No other libraries or images required.


