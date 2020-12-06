document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.add('show-menu');
})
document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('show-menu');
})