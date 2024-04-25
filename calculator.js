// define operator functions
function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function power(x, y) {
  return x ^ y
}

function mod(x, y) {
  x % y
}

function squareRoot(x) {
  return Math.sqrt(x)
}

function calculate(expression) {
  expression = expression.split(' ')

  let num1
  let operator
  let num2

  if (expression.length === 3) {
    num1 = Number(expression[0])
    operator = expression[1]
    num2 = Number(expression[2])
  } else if (expression.length === 2) {
    operator = expression[0]
    num1 = Number(expression[1])
  } else {
    return alert("Too many / Too Few Inputs")
  }

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return alert("That's not a number, sillypants!")
  }

  if (operator === '+') {
    return num1 + num2
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === '*') {
    return num1 * num2
  } else if (operator === '^') {
    return num1 ** num2
  } else if (operator === '%') {
    return num1 % num2
  } else if (operator === '/') {
    return num1 / num2
  } else if (operator === 'sqrt') {
    return Math.sqrt(num1)
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
