/* exported countdown */
function countdown(number) {
  const countarray = [];
  for (let i = number; i >= 0; i--) {
    countarray.push(i);
  }
  return countarray;
}
