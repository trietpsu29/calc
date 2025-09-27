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
let operandA;
let operandB;
let operator;

function operate(a, op, b) {
  if (op == "+") return addNumbers(a, b);
  if (op == "-") return subtractNumbers(a, b);
  if (op == "x") return multiplyNumbers(a, b);
  return divideNumbers(a, b);
}
function populate(val) {
  const display = document.querySelector(".display");
  operandA = display.textContent + val;
  display.textContent = operandA;
}
const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", () => { populate("0") });
const btn1 = document.querySelector(".one");
btn1.addEventListener("click", () => { populate("1") });

