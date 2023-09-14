const slides = document.querySelectorAll('.slider-images__item');
const controlls = document.querySelectorAll('.slider-controls__item');
const btnControlls = document.querySelectorAll('.btn-control');
const sliderInfo = document.querySelector('.slider-info');

const slideDescription = [
  'Code Jam!?',
  'Any questions',
  'DeadLine is not coming soon',
  'I am non tsleeping'
];

sliderInfo.textContent =  slideDescription[0];


const removeActiveStatusBtn = () => {
  btnControlls.forEach(btn => btn.classList.remove('active'));
}


controlls.forEach(controll => {

  controll.addEventListener('click', () => {
    removeActiveStatusBtn();

    let position = Number(controll.getAttribute('data-position'));
    sliderInfo.textContent = slideDescription[position - 1];

    btnControlls[position - 1].classList.add('active');

    slides.forEach((slide) => {
      let xPosition = slide.offsetWidth;
      slide.style.transform = `translateX(${(xPosition / 10 - xPosition / 10 * (position))}rem)`;
    })
  })
})




