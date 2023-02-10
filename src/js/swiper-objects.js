const swiper = new Swiper('.popular__swiper', {
    // modules: [Navigation, Pagination],
    loop: 'true',
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        // when window width is >= 320px
        720: {
          spaceBetween: 40
        },
      }
  });