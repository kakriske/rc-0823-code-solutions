const tabA = document.querySelector('.tab-container');
const tabB = document.querySelectorAll('.tab');
const tabC = document.querySelectorAll('.view');

tabA.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    const dataA = event.target.getAttribute('data-view');
    for (let i = 0; i < tabB.length; i++) {
      const tabD = tabB[i];

      if (tabD === event.target) {
        tabD.className = 'tab active';
      } else {
        tabD.className = 'tab';
      }
    }
    for (let i = 0; i < tabC.length; i++) {
      const tabE = tabC[i];
      if (tabE.getAttribute('data-view') === dataA) {
        tabE.className = 'view';
      } else {
        tabE.className = 'hidden';
      }
    }
  }
});
