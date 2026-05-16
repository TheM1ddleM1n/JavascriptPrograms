import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function ask() {
  rl.question("Guess a number (1-100): ", (input) => {
    const guess = parseInt(input, 10);
    attempts++;
    if (isNaN(guess)) { console.log("Enter a valid number."); return ask(); }
    if (guess < secret) { console.log("Too low!"); ask(); }
    else if (guess > secret) { console.log("Too high!"); ask(); }
    else { console.log(`Correct! You got it in ${attempts} attempt${attempts === 1 ? "" : "s"}.`); rl.close(); }
  });
}

ask();
