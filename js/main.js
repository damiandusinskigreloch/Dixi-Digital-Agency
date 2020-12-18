// Production JS :)
function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

// Remove listener to re-enable scroll
window.removeEventListener('scroll', noScroll);

// 
let navBtn = document.querySelector('.top-bar__btn-container');
let mainNav = document.querySelector('.menu');
let btnShowMore = document.querySelectorAll('.raport__btn-show-more');
let offerBtn = document.querySelector('.menu__link--disable');
navBtn.addEventListener('click', () => {
  mainNav.classList.toggle('menu--show');
  window.addEventListener('scroll', noScroll);
  if(mainNav.className == "menu"){
    window.removeEventListener('scroll', noScroll);


  }
})

btnShowMore.forEach(function (btn) {
  btn.addEventListener('click', () => {
    btn.parentNode.querySelector('.raport__text-more').classList.toggle("raport__text-more--show");
  })
})


offerBtn.addEventListener('click', (e) => {
e.preventDefault();
console.log(e.target.nextElementSibling)
e.target.nextElementSibling.classList.toggle('menu__list-inbox-active')
})

