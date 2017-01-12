function result() {
  calc.input.value = eval(calc.input.value);
}

function reset() {
  calc.input.value = null;
}

function deleteChar(i) {
  calc.input.value = calc.input.value.substring(0, calc.input.value.length - 1);
}