// Production JS :)
let navBtn = document.querySelector('.top-bar__btn-container');
let mainNav = document.querySelector('.menu');
let btnShowMore = document.querySelectorAll('.btn-show-more');

navBtn.addEventListener('click', () => {
  mainNav.classList.toggle('menu--show');
})



btnShowMore.forEach(function (btn) {
  btn.addEventListener('click', () => {
    btn.parentNode.querySelector('.text-more').classList.toggle("show");
  })
})