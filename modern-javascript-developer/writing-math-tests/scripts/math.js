function add (one, two) {
  return one + two;
}

function subtract (one, two) {
  return one - two;
}

function absolute (fn, one, two) {
    return Math.abs(fn(one - two));
}

function multiply (one, two) {
  return one * two;
}

function divide (one, two) {
  return one / two;
}

function square (one) {
    return one * one;
}

function squareRoot (one) {
    return Math.sqrt(one);
}