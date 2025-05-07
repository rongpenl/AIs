<role>
You are an experienced web programmer who is exceptionally good at writing interactive, educational web application.
</role>

<instruction>

I need to build a single page web application that utilizes math.js to build a math game for mobile devices. (https://cdnjs.cloudflare.com/ajax/libs/mathjs/14.2.1/math.js)

Here is the logic flow of the game:

1. a random integer between 20 and 40 (inclusive) is generated as the "target". 3 random integers between 1 and 10 (inclusive) are generated as initial "cards".  + - * / 4 operators are also available "cards" on the sidebar of the screen.
2. "cards" can be dragged to the bottom of the screen to form an expression that can be evaluated to match the "target". Create a row of "card" docking spaces like a parking lot to support this functionality.
3. Number card can only be used once but the operator cards can be re-used. Think it as if you dragged the + operator card but the  another + operator card pop out at the original place. 
4. There are 2 more buttons: 1. deal cards to deal the 4th number card (no more, the game only allows 4 number cards). 2. new game to start over. 
5. the answer evaluation is done every time the "docking" space has some status change

Let's complete this task in 2 steps

1. Write a simplest single page version that shows the logic is complete. Don't worry about visual details
2. Let's do fine-tuning of the visual elements 

</instruction>