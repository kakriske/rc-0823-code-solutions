const isOn = true;
const bulb = document.querySelector('.light');

bulb.addEventListener('click', function (event) {
  if (isOn) {
    bulb.className = 'light-off';
  } else {
    bulb.className = 'light';
  }
});
