let numberOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

// キーボードで押す時の処理（key = キーボードのキー）
document.addEventListener("keydown", function (e) {
  console.log(e.buttonInnerHTML);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// const audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// function add(num1, num2) {
//   return num1 + num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
