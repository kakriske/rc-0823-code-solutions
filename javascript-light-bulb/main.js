let isOn = false;
const $center = document.querySelector('.center');
const $light = document.querySelector('.light');

$light.addEventListener('click', function (event) {
  isOn = !isOn;
  if (isOn) {
    $center.className = 'center bright';
    $light.className = 'light on';
  } else {
    $center.className = 'center';
    $light.className = 'light';
  }
});
