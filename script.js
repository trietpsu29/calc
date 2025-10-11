function addNumbers(a, b) {
  return parseFloat((a + b).toFixed(10));
}
function subtractNumbers(a, b) {
  return parseFloat((a - b).toFixed(10));
}
function multiplyNumbers(a, b) {
  return parseFloat((a * b).toFixed(10));
}
function divideNumbers(a, b) {
  return parseFloat((a / b).toFixed(10));
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
function populate(val) {
  if (val == "." && display.textContent.includes(".")) return;
  if (operandB == "") {
    if (val == ".") display.textContent = "0.";
    else display.textContent = val;
  } else display.textContent += val;
  operandB = display.textContent;
}
function opHandler(val) {
  operandA = operate(operandA, operator, operandB);
  operandB = "";
  display.textContent = operandA;
  if (operandA == "Infinity") operandA = "";
  if (val == "=") {
    operandA = "";
    operator = "";
  } else operator = val;
}
function fnHandler(val) {
  if (val == "AC" || val == "a") {
    operandA = "";
    operandB = "";
    operator = "";
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
    operandB = display.textContent;
    if (display.textContent == "") {
      display.textContent = "0";
    }
  }
}

let operandA = "";
let operandB = "";
let operator = "";
const display = document.querySelector(".display");

const btnNum = document.querySelectorAll(".num");
btnNum.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    populate(e.target.textContent);
  });
});
const btnOp = document.querySelectorAll(".op");
btnOp.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    opHandler(e.target.textContent);
  });
});
const btnFunc = document.querySelectorAll(".fn");
btnFunc.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    fnHandler(e.target.textContent);
  });
});
document.addEventListener("keydown", (event) => {
  if (!isNaN(event.key) || event.key == ".") {
    populate(event.key);
  } else if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "x" ||
    event.key == "/" ||
    event.key == "=" ||
    event.key == "Enter"
  )
    opHandler(event.key == "Enter" ? "=" : event.key);
  else if (
    event.key == "Backspace" ||
    event.key == "Delete" ||
    event.key == "a"
  )
    fnHandler(event.key);
});
