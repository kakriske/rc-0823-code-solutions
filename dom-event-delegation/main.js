const taskC = document.querySelector('.task-list');

taskC.addEventListener('click', function (event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  console.log(event.target.closest('.task-list-item'));
  const element = document.querySelector('.task-list-item');
  element.remove();
});
