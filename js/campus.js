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

const gallery = document.querySelector(".gallery");
const track = document.querySelector(".gallery-track");
const cards = document.querySelectorAll(".card");
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start, end, t) => start * (1 - t) + end * t;

function updateScroll() {
  startY = lerp(startY, endY, easing);
  gallery.style.height = `${track.clientHeight}px`;
  track.style.transform = `translateY(-${startY}px)`;
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (startY.toFixed(1) === window.scrollY.toFixed(1))
    cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector(".card-image-wrapper");
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const { top } = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener("load", updateScroll, false);
window.addEventListener("scroll", init, false);
window.addEventListener("resize", updateScroll, false);
