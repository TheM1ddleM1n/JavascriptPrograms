const choices = ["rock", "paper", "scissors"];

function play(playerChoice) {
  const computer = choices[Math.floor(Math.random() * 3)];
  console.log(`You: ${playerChoice} | Computer: ${computer}`);
  if (playerChoice === computer) return console.log("It's a tie!");
  const wins = { rock: "scissors", paper: "rock", scissors: "paper" };
  console.log(wins[playerChoice] === computer ? "You win!" : "Computer wins!");
}

play(choices[Math.floor(Math.random() * 3)]);
