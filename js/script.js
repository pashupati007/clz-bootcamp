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
  refree(hands, computer_choice)
}

function refree(hands, computer_choice) {
  
}
