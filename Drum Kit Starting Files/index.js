// let numberOfButton = document.querySelectorAll('.drum').length;

// for (let i = 0; i < numberOfButton; i++) {
//   document.querySelectorAll('.drum')[i].addEventListener('click', function handleClick() {
//     alert('clicked!');
//   });
// }

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
