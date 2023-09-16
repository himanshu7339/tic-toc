console.log("Welcome to tic tac toe!");
let music = new Audio("./assets/music.mp3");
let turnMusic = new Audio("./assets/ting.mp3");
let gameOver = new Audio("./assets/gameOver.mp3");
let reset = document.getElementById("reset");

let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn == "X" ? "0" : "X";
};

// function to check for a win

const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 6],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " " + "Won";
      isGameOver = true;
      document
        .querySelector(".imageBox")
        .getElementsByTagName("img")[0].style.width = "300px";
      //console.log
    }
  });
};

// main game logic
let boxes = document.getElementsByClassName("box");
console.log(Array.from(boxes));
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      console.log(turn);
      console.log("inner text", boxText.innerText);
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + " " + turn;
      }
    }
  });
});

// add onclick event listeners
reset.addEventListener("click", function () {
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.getElementsByClassName("info")[0].innerText =
    "Turn for" + " " + turn;

  document
    .querySelector(".imageBox")
    .getElementsByTagName("img")[0].style.width = "0px";
});
