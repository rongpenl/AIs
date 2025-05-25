# Prompt: Bulls and Cows Game in Pure HTML

Write a complete standalone HTML file implementing the "Bulls and Cows" number guessing game. All JavaScript must be embedded directly within the HTML file (no external imports or dependencies). The game logic and UI must follow the details below.

---

## Game Logic

- At the start of the game, generate a 4-digit secret number.
- Each digit must be unique (e.g., `7043` is valid, `1123` is not).
- Players make guesses by inputting 4-digit numbers.

### After each guess:

- Return feedback in the format:
  - `x Cow`: number of digits that are correct and in the correct position.
  - `y Ox`: number of digits that are correct but in the wrong position.
- Example: if the secret is `7043` and the guess is `1234`, return `0 Cow | 2 Ox` (3 and 4 exist but in the wrong place).

### Additional rules:

- If the user enters a number with duplicate digits or a number not exactly 4 digits long, reject the input with an alert or message.
- The game ends when the user correctly guesses all 4 digits in the correct positions (`4 Cow`).
- When the user wins, reveal the secret number and display a congratulatory message.

---

## UI Requirements

Design the UI to follow a vertical layout with the following elements from top to bottom:

1. Feedback History  
   A scrollable container that shows all previous guesses and the corresponding feedback (e.g., `1234 → 1 Cow | 2 Ox`).

2. Answer Display  
   A text area or box where the correct answer is revealed when the user clicks "Show Answer". By default, this should display `????`.

3. Two Buttons  
   - `Start`: Resets the game with a new secret number.  
   - `Show Answer`: Reveals the secret number in the answer display box.

4. Guess Display  
   Shows the user’s current guess-in-progress as they select digits.

5. Keypad  
   A number pad with digits `0–9` arranged in two rows and five columns.

6. Two More Buttons  
   - `Delete`: Removes the last digit from the current guess.  
   - `Submit`: Submits the current 4-digit guess.

---

## Additional Notes

- Prevent users from selecting more than 4 digits.
- Prevent repeated digits in a single guess.
- Maintain visual clarity with simple CSS, and prioritize layout and usability.
- The entire game must work responsively in a browser as a single HTML file.
