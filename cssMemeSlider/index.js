const slides = document.querySelectorAll('.slider-images__item');
const controlls = document.querySelectorAll('.slider-controls__item');
const btnControlls = document.querySelectorAll('.btn-control');


const removeActiveStatusBtn = () => {
  btnControlls.forEach(btn => btn.classList.remove('active'));
}


controlls.forEach(controll => {

  controll.addEventListener('click', () => {
    removeActiveStatusBtn();

    let position = Number(controll.getAttribute('data-position'));
    btnControlls[position - 1].classList.add('active');

    slides.forEach((slide) => {
      let xPosition = slide.offsetWidth;
      slide.style.transform = `translateX(${(xPosition / 10 - xPosition / 10 * (position))}rem)`;
    })
  })
})




