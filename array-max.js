function arrayMax(numbers) {
  let max = number[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

const numberList = [52, 25, 3, 55, 4, 54, 45, 69, 89, 100, 58, 101];
console.log(arrayMax(numberList));