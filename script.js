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
  if (op == "add") return addNumbers(a, b);
  if (op == "subtract") return subtractNumbers(a, b);
  if (op == "multiply") return multiplyNumbers(a, b);
  return divideNumbers(a, b);
}
