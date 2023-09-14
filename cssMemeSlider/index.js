const slides = document.querySelectorAll('.slider-images__item');
const controlls = document.querySelectorAll('.slider-controls__item');
const btnControlls = document.querySelectorAll('.btn-control');
const sliderInfo = document.querySelector('.slider-info');

const slideDescription = [
  'Code Jam!?',
  'Any questions?',
  'DeadLine is not coming soon',
  'I am non tsleeping!'
];

sliderInfo.textContent = slideDescription[0];

const removeClass = (elements, elClass) => {
  console.log('remove class', elClass);
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].classList.remove(elClass);
  }
};

controlls.forEach(controll => {
  controll.addEventListener('click', () => {

    removeClass(btnControlls, 'active');
    removeClass(sliderInfo, 'titleOn');

    let position = Number(controll.getAttribute('data-position'));

    sliderInfo.classList.add('titleOn')
    sliderInfo.textContent = slideDescription[position - 1];

    setTimeout(() => {
      console.log('set');
      sliderInfo.classList.remove('titleOn')
    }, 600)

    btnControlls[position - 1].classList.add('active');

    slides.forEach((slide) => {
      let xPosition = slide.offsetWidth;
      slide.style.transform = `translateX(${(xPosition / 10 - xPosition / 10 * (position))}rem)`;
    })
  })
})
