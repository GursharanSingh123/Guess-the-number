"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 20;
const inputNumber = document.querySelector("#input-block");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

let message = document.querySelector(".start-guessing-title");
let boddy = document.querySelector("body");

checkBtn.addEventListener("click", function () {
  let inputValue = Number(inputNumber.value);
  if (inputValue === 0) {
    alert("Input Field is Empty!!Please input a number!");
  } else if (inputValue > 20 || inputValue < 0) {
    alert("⚠️⚠️Please enter a valid number between 1 and 20!");
  } else if (inputValue != randomNumber) {
    if (scoreCounter > 1) {
      message.innerText =
        inputValue > randomNumber ? "📈 Too High!!" : "📉 Too Low!!";
      scoreCounter--;
    } else {
      scoreCounter = 0;
      message.innerText = "💥 You Lost!!";
    }
  } else {
    message.innerText = "🎉 Correct Number!!";

    boddy.style.background = "green";

    inputNumber.style.background = "green";

    if (scoreCounter > document.querySelector(".highscore").innerText) {
      document.querySelector(".highscore").innerText = scoreCounter;
    }
    document.querySelector(".question-block").innerText = randomNumber;

    checkBtn.style.display = "none";
  }

  document.querySelector(".score").innerText = scoreCounter;
});

againBtn.addEventListener("click", function () {
  scoreCounter = 20;
  document.querySelector(".score").innerText = scoreCounter;
  inputNumber.value = "";
  document.querySelector(".question-block").innerText = "?";
  message.innerText = "Start guessing...";
  boddy.style.background = "black";
  inputNumber.style.background = "black";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  if ((checkBtn.style.display = "none")) checkBtn.style.display = "block";
  // console.log(randomNumber);
});
// console.log(randomNumber);
