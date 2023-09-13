const slides = document.querySelectorAll('.slider-images__item');
const controlls = document.querySelectorAll('.slider-controls__item');




controlls.forEach(controll => {
  controll.addEventListener('click', () => {
    let position = controll.getAttribute('data-position');

    slides.forEach((slide) => {
      let xPosition = slide.offsetWidth;

      slide.style.transform = `translateX(${(xPosition / 10 - xPosition/10 * (Number(position)))}rem)`;
    })
  })
})




