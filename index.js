//get elements
let playerChoice = document.getElementsByClassName("player-choice")[0];
let pcChoice = document.getElementsByClassName("pc-choice")[0];
let result = document.getElementsByClassName("result")[0];
const CHOICHES = ["paper", "rock", "scissors"];
let point_pc = document.getElementsByClassName("point-pc")[0];
let point_player = document.getElementsByClassName("point-player")[0];
let numRounds = document.getElementsByClassName("num-rounds")[0];

let player;
let pc;

let pointPc = 0;
let pointPlayer = 0;
let rounds = 1;

//generate player choise
let startRound = (e) => {
  player = e.target.id;
  playerChoice.innerHTML = player;
  let pcChoise = computerPlay();
  console.log(pcChoise);
  let winnerRound = winner(player, pcChoise);

  points(winnerRound);
};

//generate pc choise
function computerPlay() {
  pc = CHOICHES[pcChoiceGenerator = Math.round(Math.random() * 2)];
  pcChoice.innerHTML = pc;
  return pc;
}

// choise winner
let winner = function (playerHasChosen, pcHasChosen) {
  let winnerRound = "";

  if (pcHasChosen == playerHasChosen) {
    winnerRound = "equal";
  } else if (pcHasChosen == "paper" && playerHasChosen == "rock") {
    winnerRound = "pc";
  } else if (pcHasChosen == "paper") {
    winnerRound = "player";
  } else if (pcHasChosen == "rock" && playerHasChosen == "scissors") {
    winnerRound = "pc";
  } else if (pcHasChosen == "rock") {
    winnerRound = "player";
  } else if (pcHasChosen == "scissors" && playerHasChosen == "paper") {
    winnerRound = "pc";
  } else if (pcHasChosen == "scissors") {
    winnerRound = "player";
  }
  result.innerHTML = winnerRound;

  return winnerRound;
};
//assign points
let points = (winnerRound) => {
  if (winnerRound == "player") {
    pointPlayer++;

    point_player.innerHTML = pointPlayer;
  } else if (winnerRound == "pc") {
    pointPc++;

    point_pc.innerHTML = pointPc;
  }
  numRounds.innerHTML = rounds++;

  stop(rounds);
};
//stop the game and call the function to decretate the winner
let stop = (rounds) => {
  if (rounds == 6) {
    console.log("stop rounds");
    decretationWinner();
  }
};

function decretationWinner() {
  document.getElementById("choices").remove();
  document.getElementById("section-rounds").remove();
  document.getElementsByClassName("section-head")[0].remove();
  let finalWinner = document.getElementsByClassName("final-winner")[0];
  let elemPoints = document.querySelector("div.points");

  const BUTTON_REFRESH = document.createElement("button");
  BUTTON_REFRESH.classList.add("btn","btn-warning");
  BUTTON_REFRESH.innerHTML = "restart the game!";

  BUTTON_REFRESH.setAttribute("onclick", "reload()");

  elemPoints.appendChild(BUTTON_REFRESH);


  if (pointPc > pointPlayer) finalWinner.innerHTML = "PC wins the match!";
  else if (pointPlayer > pointPc) {
    finalWinner.innerHTML = "player wins the match!";
  } else {
    finalWinner.innerHTML = "It's a draw";
  }
}

function reload () {
  window.location.reload();
}