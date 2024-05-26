let num1 = 0;
let num2 = 0;
let operador = "";
let result;

function addToDisplay(value) {
  document.getElementById("inputTexto").value += value;
}

function addOperator(op) {
  num1 = document.getElementById("inputTexto").value;
  operador += op;
  document.getElementById("inputTexto").value = "";
}

function calculate() {
  num2 = document.getElementById("inputTexto").value;

  if (operador === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  }
  document.getElementById("inputTexto").value = result;
}

function clearAll() {
  num1 = 0;
  num2 = 0;
  operador = "";
  document.getElementById("inputTexto").value = "";
}
