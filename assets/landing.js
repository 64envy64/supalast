/*--TYPING EFF --*/
const dynamicText = document.querySelector("h1 span");
const words = ["KNOWLEDGE", "EDUCATION", "Wisdom", "Everything"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

/*-- FAQ BUTT --*/
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

/*-- PARTNERS --*/

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('carousel-container');
  const images = container.innerHTML;

  // Увеличьте количество повторений (в данном случае, 5 раз)
  const repeatCount = 7;

  // Дублируем изображения для увеличения повторений
  container.innerHTML = new Array(repeatCount).fill(images).join('');

  const duration = 35;
  const interval = 200;

  setInterval(() => {
    container.style.transition = `transform ${duration}s linear`;
    container.style.transform = 'translate3d(-100%, 0, 0)'; // Используем translate3d для улучшения производительности

    // Ждем завершения анимации и сбрасываем transform
    setTimeout(() => {
      container.style.transition = 'none';
      container.style.transform = 'translate3d(0, 0, 0)';
    }, duration * 1000);
  }, (duration + interval) * 1000);
});

/*-- PARALLAXBACK --*/
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('backgroundVideo');
    
    // Получаем высоту видео, чтобы знать, когда остановить параллакс
    const videoHeight = video.offsetHeight;
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      // Рассчитываем translateY, чтобы создать эффект параллакса
      const translateY = Math.max(0, Math.min(videoHeight / 2, scrollPosition / 2));
  
      // Применяем translateY к видео
      video.style.transform = `translateY(${translateY}px)`;
    });
  });