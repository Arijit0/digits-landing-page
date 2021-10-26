const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 499px
      768: {
          slidesPerView: 4,
          spaceBetween: 10
      },
      560: {
          slidesPerView: 3,
          spaceBetween: 10
      }
  }
  });

  function openslider() {
      const sliderElM = document.querySelector('.right-side-container');
      sliderElM.classList.add("open-slider");
      const overlayElM = document.querySelector('.overlay');
      overlayElM.classList.add("open-overlay");
  }

  function closeSlider() {
    const sliderElM = document.querySelector('.right-side-container');
    sliderElM.classList.remove("open-slider");
    const overlayElM = document.querySelector('.overlay');
    overlayElM.classList.remove("open-overlay");
  }