const readline = require("readline");

const words = ["javascript", "developer", "keyboard", "variable", "function"];
const word = words[Math.floor(Math.random() * words.length)];
const guessed = new Set();
let lives = 6;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function display() {
  const masked = word.split("").map(l => (guessed.has(l) ? l : "_")).join(" ");
  console.log(`\n${masked}  |  Lives: ${lives}`);
}

function turn() {
  display();
  if (word.split("").every(l => guessed.has(l))) { console.log("You win!"); return rl.close(); }
  if (lives === 0) { console.log(`Game over! The word was: ${word}`); return rl.close(); }
  rl.question("Guess a letter: ", (input) => {
    const letter = input.trim().toLowerCase();
    if (!letter || guessed.has(letter)) { console.log("Already guessed or invalid."); return turn(); }
    guessed.add(letter);
    if (!word.includes(letter)) { lives--; console.log("Wrong!"); }
    turn();
  });
}

turn();
