// Production JS :)
let navBtn = document.querySelector('.nav-btn');
let closeBtn = document.querySelector('.close-btn');
let mainNav = document.querySelector('.main-nav');
let btnShowMore = document.querySelectorAll('.btn-show-more');

navBtn.addEventListener('click', () => {
  mainNav.classList.add('show-menu');
})

closeBtn.addEventListener('click', () => {
  mainNav.classList.remove('show-menu');
})

btnShowMore.forEach(function (btn) {
  btn.addEventListener('click', () => {
    item.parentNode.querySelector('.text-more').classList.toggle('show');
  })
})