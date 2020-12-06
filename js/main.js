// Production JS :)

document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.add('show-menu');
})
document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.remove('show-menu');
})

var x = document.querySelectorAll('.btn-show-more');
x.forEach(function (item) {
  item.addEventListener('click', () => {
    item.parentNode.querySelector('.text-more').classList.toggle('show');
  })
})