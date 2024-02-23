function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > 3) {
    return num1;
  }

  else if (num2 > num1 && num2 > num3) {
    return num2;
  }

  else {
    return num3;
  }
}

console.log(maxOfThree(5, 15, 51));

const max = Math.max(12, 2, 20, 14, 55, 6, 14, 78)
console.log(max);