"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;

let guessCount = 4;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const yourNum = Number(document.querySelector(".guess").value);

  if (!yourNum) {
    displayMessage("No number is Given!");
  } else if (yourNum === randomNumber) {
    document.querySelector(".number").textContent = yourNum;
    document.querySelector("body").style.backgroundColor = "#61b15a";
    // document.querySelector(".message").textContent = "🎉 You Guess it";
    displayMessage("🎉 You Guess it");
    document.querySelector("h1").textContent = "You Won🏆";
    document.querySelector(".again").textContent = "play Again!";

    if (guessCount === 4) {
      document.querySelector(".score").textContent = 100;
    } else if (guessCount === 3) {
      document.querySelector(".score").textContent = 75;
    } else if (guessCount === 2) {
      document.querySelector(".score").textContent = 50;
    } else if (guessCount === 1) {
      document.querySelector(".score").textContent = 25;
    }
  } else if (yourNum !== randomNumber) {
    // document.querySelector(".message").textContent =
    //   yourNum > randomNumber ? "👉Your Guess is High" : "👉Your Guess is Low";
    displayMessage(
      yourNum > randomNumber ? "👉Your Guess is High" : "👉Your Guess is Low"
    );

    guessCount--;

    document.querySelector(".count").textContent = guessCount;

    if (guessCount === 0) {
      document.querySelector("h1").textContent = "Game Over💥";

      // document.querySelector(".message").textContent = "You Lose🤪";
      displayMessage("You Lose🤪");

      document.querySelector(".again").textContent = "Try Again!";
      document.querySelector("body").style.backgroundColor = "#ff4646";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  guessCount = 4;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = "0";
  document.querySelector(".again").textContent = "Restart";
  document.querySelector(".count").textContent = guessCount;
  document.querySelector(".guess").value = "";
});
