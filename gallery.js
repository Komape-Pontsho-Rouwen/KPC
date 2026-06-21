// gallery.js
document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const gallery = document.querySelector('.gallery-images');
  const images = gallery ? gallery.querySelectorAll('img') : [];

  if (!gallery || !leftArrow || !rightArrow || images.length === 0) return;

  let currentIndex = 0; // Index of the currently visible image 

  const updateArrows = () => {

    // Disable or blur arrows based on position
    
    if (currentIndex <= 0) {
      leftArrow.style.opacity = '0.3';
      leftArrow.style.pointerEvents = 'none';
    } else {
      leftArrow.style.opacity = '1';
      leftArrow.style.pointerEvents = 'auto';
    }

    if (currentIndex >= images.length - 1) {
      rightArrow.style.opacity = '0.3';
      rightArrow.style.pointerEvents = 'none';
    } else {
      rightArrow.style.opacity = '1';
      rightArrow.style.pointerEvents = 'auto';
    }
  };

  const scrollToImage = (index) => {
    if (index < 0) index = 0;
    if (index > images.length - 1) index = images.length - 1;
    currentIndex = index;

    const scrollPosition = images[index].offsetLeft - gallery.offsetLeft;
    gallery.scrollTo({ left: scrollPosition, behavior: 'smooth' });

    updateArrows();
  };

  // Arrow click events
  rightArrow.addEventListener('click', () => {
    scrollToImage(currentIndex + 1);
  });

  leftArrow.addEventListener('click', () => {
    scrollToImage(currentIndex - 1);
  });

  // Initialize arrow state
  updateArrows();
});