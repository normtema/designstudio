$('.carousel').slick({
    infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
    prevArrow: '<img class="carousel-arrows carousel-arrows__left" src="img/project/arrows-left.svg" alt="">',
    nextArrow: '<img class="carousel-arrows carousel-arrows__right" src="img/project/arrows-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });