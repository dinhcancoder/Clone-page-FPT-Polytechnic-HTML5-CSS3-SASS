let search = document.querySelector('.search');

window.addEventListener('scroll', () => {
  let headerBottom = document.querySelector('.header-bottom');
  let scroll = document.querySelector('.scroll');
  headerBottom.classList.toggle('scrollSticky', window.scrollY > 185);
  scroll.classList.toggle('up', window.scrollY > 320);
});

document.querySelector('.scroll').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

document.querySelector('.header-info a:last-child').addEventListener('click', () => {
  search.classList.toggle('onOffSeach');
})

document.querySelector('.search-icon ion-icon').addEventListener('click', () => {
  search.classList.toggle('onOffSeach');
})