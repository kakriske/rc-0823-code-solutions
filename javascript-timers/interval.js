const integerCount = document.querySelector('.countdown-display');

function updateCount(count) {
  integerCount.textContent = count;
  if (count === 0) {
    integerCount.textContent = '~Earth Beeeelooowww Us~';
  }
}
function initiateCount() {
  let count = 4;

  const countId = setInterval(function () {
    updateCount(count);
    if (count > 0) {
      count--;
    } else {
      clearInterval(countId);
    }
  }, 2000);
}
initiateCount();
