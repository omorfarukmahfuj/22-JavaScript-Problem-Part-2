function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divided(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {

  if (operation === 'add') {
    return add(a, b);
  }

  else if (operation === 'subtract') {
    return subtract(a, b);
  }

  else if (operation === 'multiply') {
    return multiply(a, b);
  }

  else if (operation === 'divided') {
    return divided(a, b);
  }

  else {
    return 'Invalid Operation'
  }
}
console.log(calculator(5, 7, 'multiply'));