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

function operate(a, op, b) {
  if (b == "") return display.textContent;
  if (a == "") return b;
  a = Number(a);
  b = Number(b);
  if (op == "+") return addNumbers(a, b);
  if (op == "-") return subtractNumbers(a, b);
  if (op == "x") return multiplyNumbers(a, b);
  return divideNumbers(a, b);
}

let operandA = "";
let operandB = "";
let operator = "";
const display = document.querySelector(".display");

function populate(val) {
  if (val == "." && display.textContent.includes(".")) return;
  if (operandB == "") {
    if (val == ".") display.textContent = "0.";
    else display.textContent = val;
  } else display.textContent += val;
  operandB = display.textContent;
}
const btnNum = document.querySelectorAll(".num");
btnNum.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    populate(e.target.textContent);
  });
});
const btnOp = document.querySelectorAll(".op");
btnOp.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operandA = operate(operandA, operator, operandB);
    operator = e.target.textContent;
    operandB = "";
    display.textContent = operandA;
    if (operandA == "Infinity") operandA = "";
  });
});
const btnFunc = document.querySelectorAll(".fn");
btnFunc.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent == "AC") {
      operandA = "";
      operandB = "";
      operator = "";
      display.textContent = "0";
    }
  });
});
