function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let slides = document.querySelectorAll('.carousel__slide');
  let currentSlide = 0;
  let totalSlides = slides.length;

  function updateCarousel() {
    let slideWidth = carouselInner.offsetWidth;
    let offset = -currentSlide * slideWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
    arrowLeft.style.display = currentSlide === 0 ? 'none' : '';
    arrowRight.style.display = currentSlide === totalSlides - 1 ? 'none' : '';
  }

  arrowRight.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    }
  });
  
  arrowLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });
  
  arrowLeft.style.display = 'none';
  carouselInner.style.transform = 'translateX(0px)';
}
