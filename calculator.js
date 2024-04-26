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
  return x ** y
}

function mod(x, y) {
  return x % y
}

function squareRoot(x) {
  return Math.sqrt(x)
}

function factorial(x) {
  let factorialArray = []

  // alert user if negative or decimal is entered
  if (x < 0 || x % 1 > 0) {
    return alert("Sorry, mate! Negatives and decimals aren't allowed here.")
  }

  for (let i = x; i > 0; i--) {
    factorialArray.push(i)
  }

  x = 1

  for (let i = 0; i < factorialArray.length; i++) {
    x *= factorialArray[i]
  }

  return x
}

function calculate(expression) {
  expression = expression.split(' ')

  let num1
  let operator
  let num2

  // assign variable values based on array length
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

  // alert user if strings are entered where numbers should be
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return alert("That's not a number, sillypants!")
  }

  // determine proper mathematical 
  if (operator === '+') {
    return add(num1, num2)
  } else if (operator === '-') {
    return subtract(num1, num2)
  } else if (operator === '*') {
    return multiply(num1, num2)
  } else if (operator === '^') {
    return power(num1, num2)
  } else if (operator === '%') {
    return mod(num1, num2)
  } else if (operator === '/') {
    return divide(num1, num2)
  } else if (operator === 'sqrt') {
    return squareRoot(num1)
  } else if (operator === '!') {
    return factorial(num1)
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
