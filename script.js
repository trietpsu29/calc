function addNumbers(a, b) {
  return a + b;
}
function subtractNumbers(a, b) {
  return a - b;
}
function multiplyNumbers(a, b) {
  return a * b;
}
function divideNumbers(a, b) {
  return a / b;
}
let operandA = "0";
let operandB = "";
let operator
const display = document.querySelector(".display");

function operate(a, op, b) {
  if (op == "+") return addNumbers(a, b);
  if (op == "-") return subtractNumbers(a, b);
  if (op == "x") return multiplyNumbers(a, b);
  return divideNumbers(a, b);
}
function populate(val) {
  if(operandB=="") display.textContent = val;
  else display.textContent += val;
  operandB = display.textContent;
}
const btnNum = document.querySelectorAll(".num");
btnNum.forEach((btn)=> {
  btn.addEventListener("click", (e) => {
  populate(e.target.textContent);
})
})



