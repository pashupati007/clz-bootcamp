handObj = {
  rock: "./assets/Rock.png",
  paper: "./assets/Paper.png",
  scissors: "./assets/Scissors.png",
};

function human_choice(hands) {
  let human_choice_image = document.getElementById("human_choice");
  human_choice_image.src = handObj[hands];
  computer_choice(hands);
}

computerArray = [];

function computer_choice(hands) {
  const bot_choice = ["rock", "paper", "scissors"];
  let random_number = Math.floor(Math.random() * 3);
  let computer_choice = bot_choice[random_number];
  let computer_choice_image = document.getElementById("computer_choice");
  computer_choice_image.src = handObj[computer_choice];
  refree(hands, computer_choice);
}

function refree(hands, computer_choice) {
  if (hands === "rock" && computer_choice === "paper") {
    setDecision("Computer");
  }
  if (hands === "rock" && computer_choice === "scissors") {
    setDecision("human");
  }
  if (hands === "rock" && computer_choice === "rock") {
    setDecision("Draw");
  }
  if (hands === "paper" && computer_choice === "paper") {
    setDecision("Draw");
  }
  if (hands === "paper" && computer_choice === "scissors") {
    setDecision("Computer");
  }
  if (hands === "paper" && computer_choice === "rock") {
    setDecision("human");
  }
  if (hands === "scissors" && computer_choice === "rock") {
    setDecision("Computer");
  }
  if (hands === "scissors" && computer_choice === "paper") {
    setDecision("human");
  }
  if (hands === "scissors" && computer_choice === "scissors") {
    setDecision("Draw");
  }
}

function setDecision(ref_decesion) {
  let decesion = document.getElementById("decesion");
  decesion.innerHTML = ref_decesion;
  let result_board = document.getElementById("result_board");
  result_board.style.display = "flex";
  let hand = document.getElementById("hand");
  hand.style.display = "none";
}

function reset() {
  let result_board = document.getElementById("result_board");
  result_board.style.display = "none";
  let hand = document.getElementById("hand");
  hand.style.display = "flex";
}
