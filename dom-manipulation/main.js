let counter = 0;
const $hotB = document.querySelector('.hot-button');
const $clkC = document.querySelector('.click-count');

function clkEvent(event) {
  counter++;
  $clkC.textContent = 'Click: ' + counter;
  if (counter < 4) {
    $hotB.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotB.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotB.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotB.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotB.className = 'hot-button hot';
  } else {
    $hotB.className = 'hot-button nuclear';
  }
}

$hotB.addEventListener('click', clkEvent);
