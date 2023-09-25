function replaceMess() {
  const forMessage = document.querySelector('.message');
  forMessage.textContent = 'Hello There';
}
setTimeout(replaceMess, 2000);
