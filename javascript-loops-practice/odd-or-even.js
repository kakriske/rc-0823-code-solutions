/* exported oddOrEven */
function oddOrEven(numbers) {
  const arr6 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr6.push('even');
    } else {
      arr6.push('odd');
    }
  }
  return arr6;
}
