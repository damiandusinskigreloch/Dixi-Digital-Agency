// Production JS :)
let navBtn = document.querySelector('.top-bar__btn-container');
let mainNav = document.querySelector('.menu');
let btnShowMore = document.querySelectorAll('.raport__btn-show-more');

navBtn.addEventListener('click', () => {
  mainNav.classList.toggle('menu--show');
})

btnShowMore.forEach(function (btn) {
  btn.addEventListener('click', () => {
    btn.parentNode.querySelector('.raport__text-more').classList.toggle("raport__text-more--show");
  })
})