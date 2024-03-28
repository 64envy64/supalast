document.addEventListener('DOMContentLoaded', function () {
  // TYPING EFFECT
  const dynamicText = document.querySelector("h1 span");
  const words = ["KNOWLEDGE", "EDUCATION", "Wisdom", "Everything"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
          charIndex++;
          setTimeout(typeEffect, 200);
      } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(typeEffect, 100);
      } else {
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 1200);
      }
  }

  typeEffect();

  // FAQ BUTTON
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const faq = button.nextElementSibling;
          const icon = button.children[1];

          faq.classList.toggle('show');
          icon.classList.toggle('rotate');
      })
  })

  // PARTNERS
  const container = document.getElementById('carousel-container');
  const images = container.innerHTML;
  const repeatCount = 7;

  container.innerHTML = new Array(repeatCount).fill(images).join('');

  const duration = 35;
  const interval = 200;

  setInterval(() => {
      container.style.transition = `transform ${duration}s linear`;
      container.style.transform = 'translate3d(-100%, 0, 0)';

      setTimeout(() => {
          container.style.transition = 'none';
          container.style.transform = 'translate3d(0, 0, 0)';
      }, duration * 1000);
  }, (duration + interval) * 1000);

  // PARALLAX BACKGROUND
  const video = document.getElementById('backgroundVideo');
  const videoHeight = video.offsetHeight;

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const translateY = Math.max(0, Math.min(videoHeight / 2, scrollPosition / 2));
      video.style.transform = `translateY(${translateY}px)`;
  });
});
