document.addEventListener('DOMContentLoaded', () => {

  const triggers = document.querySelectorAll('.carousel-trigger');

  const modal = document.getElementById('carousel-modal');
  const modalImage = modal.querySelector('.carousel-image');
  const modalCaption = modal.querySelector('.carousel-caption');

  const prevBtn = modal.querySelector('.carousel-arrow.left');
  const nextBtn = modal.querySelector('.carousel-arrow.right');
  const closeBtn = modal.querySelector('.carousel-close');

  let images = [];
  let captions = [];
  let currentIndex = 0;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      images = trigger.dataset.images
        .split(',')
        .map(img => img.trim())
        .filter(Boolean);

      captions = trigger.dataset.captions
        .split(',')
        .map(cap => cap.trim());

      if (!images.length) return;

      currentIndex = 0;
      openCarousel();
    });
  });

  function openCarousel() {
    modal.style.display = 'flex';
    updateCarousel();
  }

  function updateCarousel() {
    modalImage.src = images[currentIndex];
    modalCaption.textContent = captions[currentIndex] || '';
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    prevBtn.style.display = '';
    nextBtn.style.display = '';
  });


  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  const singleImageTriggers = document.querySelectorAll('.single-image-trigger');

  singleImageTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imageSrc = trigger.dataset.image;
      const caption = trigger.dataset.caption || '';

      images = [imageSrc];
      captions = [caption];
      currentIndex = 0;

      // Hide arrows for single-image mode
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';

      modal.style.display = 'flex';
      updateCarousel();
    });
  });

});