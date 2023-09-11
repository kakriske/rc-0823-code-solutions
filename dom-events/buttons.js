function handleClick(event) {
  console.log('button clicked');
  console.log('event object;', event);
  console.log('event target;', event.target);
}

const clickVar = document.querySelector('.click-button');
clickVar.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object;', event);
  console.log('event target;', event.target);
}

const mouseH = document.querySelector('.hover-button');
mouseH.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object;', event);
  console.log('event target;', event.target);
}

const doubleC = document.querySelector('.double-click-button');
doubleC.addEventListener('dblclick', handleDoubleClick);
