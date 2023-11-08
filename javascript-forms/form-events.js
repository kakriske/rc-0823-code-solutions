function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of', event.target.name + ':', event.target.value);
}

const $nameIn = document.querySelector('#user-name');
const $emailIn = document.querySelector('#user-email');
const $messageIn = document.querySelector('#user-message');

$nameIn.addEventListener('input', handleInput);
$emailIn.addEventListener('input', handleInput);
$messageIn.addEventListener('input', handleInput);

$nameIn.addEventListener('focus', handleFocus);
$emailIn.addEventListener('focus', handleFocus);
$messageIn.addEventListener('focus', handleFocus);

$nameIn.addEventListener('blur', handleBlur);
$emailIn.addEventListener('blur', handleBlur);
$messageIn.addEventListener('blur', handleBlur);
