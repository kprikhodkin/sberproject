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

  menuButton.addEventListener('click', function (event) {
    event.preventDefault()
    
    this.classList.toggle('menu-btn_active')
    menu.classList.toggle('menu-slide__active')
  });

