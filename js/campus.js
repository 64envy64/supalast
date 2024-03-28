gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 40%",
      scrub: true
    }
  });
});

jQuery(document).ready(function($){

	$('.prlx').each(function(){
		gsap.fromTo($(this).find('img'),{y:"-50%"},{scrollTrigger:{trigger:$(this),start: "top bottom",end: "bottom top",markers: false,scrub: true,},y: "0%",ease:'none'});		
	});
	
	$('.legende').each(function(){
		gsap.fromTo($(this),{y:'30vh'},{scrollTrigger:{trigger:$(this).parent(),start: "top bottom",end: "bottom top",markers: false,scrub: true},y:'-30vh',ease:'none'});		
	});	

});


const slider = document.querySelector('.slider');
const items = slider.querySelectorAll('.list .item');
const next = slider.querySelector('#next');
const prev = slider.querySelector('#prev');

let countItem = items.length;
let itemActive = 0;
let refreshInterval;

// переключения на следующий слайд
const nextSlide = () => {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
};

// переключения на предыдущий слайд
const prevSlide = () => {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
};

// Обработчики событий для кнопок "Next" и "Prev"
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// показ активного слайда
const showSlider = () => {
    const itemActiveOld = slider.querySelector('.list .item.active');
    itemActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
};

// Запуск автоматического переключения слайдов
refreshInterval = setInterval(nextSlide, 6000);

