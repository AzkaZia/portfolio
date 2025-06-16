let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

slideshowContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 50) { // swipe threshold
    if (swipeDistance < 0) {
      changeSlide(1); // swipe left → next
    } else {
      changeSlide(-1); // swipe right → previous
    }
  }
}
