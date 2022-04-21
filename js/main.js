var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  const menuButton = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu-slide')
  const menuitem = document.querySelector('.menu__item')

  menuButton.addEventListener('click', function (event) {
    event.preventDefault()

    
    this.classList.toggle('menu-btn_active')
    menu.classList.toggle('menu-slide__active')
    
  });

const counter = document.querySelector('.counter');
const counterInput = counter.querySelector('.counter__input');
const counterMinButton = counter.querySelector('.counter__button--min');
const counterMaxButton = counter.querySelector('.counter__button--max');

function increaseValue() {
  let value = +counterInput.value
  counterInput.value = value + 1
}

function decreaseValue() {
  let value = +counterInput.value
  if (value !== 0) {
    counterInput.value = value - 1  
  }
}

counterMaxButton.addEventListener('click', increaseValue)

counterMinButton.addEventListener('click', decreaseValue)

function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
}
