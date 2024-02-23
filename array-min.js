function arrayMin(numbers) {
  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}

const numberList = [52, 25, 3, 55, 4, 54, 45, 69, 89, 100, 58, 101]; 
console.log(arrayMin(numberList));