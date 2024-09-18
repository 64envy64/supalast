document.addEventListener('DOMContentLoaded', () => {
    TypingEffect.init();
    FaqToggle.init();
    PartnersCarousel.init();
    ParallaxBackground.init();
    InteractiveCarousel.init();
});

/**
 * Модуль для эффекта печати текста
 */
const TypingEffect = (() => {
    const selector = "h1 span";
    const words = ["LIMITS", "EDUCATION", "BORDERS", "EVENTS"];
    const typingSpeed = 200;
    const deletingSpeed = 100;
    const pauseDuration = 1200;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let dynamicText;

    const init = () => {
        dynamicText = document.querySelector(selector);
        if (dynamicText) {
            type();
        }
    };

    const type = () => {
        const currentWord = words[wordIndex];
        const displayedText = currentWord.substring(0, charIndex);
        dynamicText.textContent = displayedText;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = !isDeleting;
            dynamicText.classList.toggle("stop-blinking");
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, pauseDuration);
        }
    };

    return { init };
})();

/**
 * Модуль для переключения FAQ секций
 */
const FaqToggle = (() => {
    const buttonSelector = 'button';

    const init = () => {
        const buttons = document.querySelectorAll(buttonSelector);
        buttons.forEach(button => {
            button.addEventListener('click', handleToggle);
        });
    };

    const handleToggle = (event) => {
        const button = event.currentTarget;
        const faq = button.nextElementSibling;
        const icon = button.querySelector('.d-arrow'); // Обновлено на 'd-arrow'

        if (faq) {
            faq.classList.toggle('show');
        }
        if (icon) {
            icon.classList.toggle('rotate');
        }
    };

    return { init };
})();

FaqToggle.init();


/**
 * Модуль для карусели партнеров
 */
const PartnersCarousel = (() => {
    const containerId = 'carousel-container';
    const repeatCount = 7;
    const transitionDuration = 35; // секунды
    const intervalDuration = 200; // миллисекунды

    let container;
    let originalContent;

    const init = () => {
        container = document.getElementById(containerId);
        if (container) {
            originalContent = container.innerHTML;
            populateCarousel();
            startAnimation();
        }
    };

    const populateCarousel = () => {
        const repeatedContent = new Array(repeatCount).fill(originalContent).join('');
        container.innerHTML = repeatedContent;
    };

    const startAnimation = () => {
        setInterval(() => {
            container.style.transition = `transform ${transitionDuration}s linear`;
            container.style.transform = 'translate3d(-100%, 0, 0)';

            setTimeout(() => {
                container.style.transition = 'none';
                container.style.transform = 'translate3d(0, 0, 0)';
            }, transitionDuration * 1000);
        }, (transitionDuration + intervalDuration) * 1000);
    };

    return { init };
})();

/**
 * Модуль для параллакс-эффекта фона
 */
const ParallaxBackground = (() => {
    const videoId = 'backgroundVideo';
    const maxTranslateFactor = 0.5;

    let video;
    let videoHeight;

    const init = () => {
        video = document.getElementById(videoId);
        if (video) {
            videoHeight = video.offsetHeight;
            window.addEventListener('scroll', handleScroll);
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const translateY = Math.min(videoHeight * maxTranslateFactor, scrollPosition / 2);
        video.style.transform = `translateY(${translateY}px)`;
    };

    return { init };
})();

/**
 * Модуль для интерактивной карусели с поддержкой свайпов и перетаскивания
 */
const InteractiveCarousel = (() => {
    const carouselSelector = '.ais-carousel';
    const itemSelector = '.ais-carousel-item';
    const marginRight = 20; // пикселей

    let carousel;
    let items;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 0;

    const init = () => {
        carousel = document.querySelector(carouselSelector);
        items = document.querySelectorAll(itemSelector);

        if (carousel && items.length > 0) {
            items.forEach((item, index) => {
                addEventListeners(item, index);
            });

            window.addEventListener('resize', setPositionByIndex);
            setPositionByIndex();
        }
    };

    const addEventListeners = (item, index) => {
        // Клик по элементу
        item.addEventListener('click', () => {
            console.log(`Clicked on item ${index + 1}`);
            // Здесь можно добавить переход на соответствующую страницу
        });

        // События касания
        item.addEventListener('touchstart', touchStart(index));
        item.addEventListener('touchend', touchEnd);
        item.addEventListener('touchmove', touchMove);

        // События мыши
        item.addEventListener('mousedown', touchStart(index));
        item.addEventListener('mouseup', touchEnd);
        item.addEventListener('mouseleave', touchEnd);
        item.addEventListener('mousemove', touchMove);
    };

    const touchStart = (index) => (event) => {
        currentIndex = index;
        startPos = getPositionX(event);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        carousel.style.cursor = 'grabbing';
    };

    const touchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);

        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentIndex < items.length - 1) currentIndex += 1;
        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

        setPositionByIndex();
        carousel.style.cursor = 'grab';
    };

    const touchMove = (event) => {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    };

    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    const animation = () => {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    };

    const setSliderPosition = () => {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    };

    const setPositionByIndex = () => {
        const itemWidth = items[0].offsetWidth + marginRight;
        currentTranslate = currentIndex * -itemWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    };

    return { init };
})();
