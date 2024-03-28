const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
let scrollTimeout;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth
      ? "none"
      : "block";
};

const autoSlide = () => {
  const firstImgWidth = carousel.firstElementChild.clientWidth + 14;
  const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  const valDifference = firstImgWidth - Math.abs(positionDiff);

  if (
    carousel.scrollLeft - scrollWidth > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  if (carousel.scrollLeft > prevScrollLeft) {
    carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  } else {
    carousel.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
};

let isDragStart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;

const dragStart = (e) => {
  isDragStart = true;
  const touch = e.type.startsWith('touch');
  prevPageX = touch ? e.touches[0].pageX : e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  const touch = e.type.startsWith('touch');
  positionDiff = (touch ? e.touches[0].pageX : e.pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const firstImgWidth = carousel.firstElementChild.clientWidth + 14;
    carousel.scrollLeft +=
      icon.id === "left" ? -firstImgWidth : firstImgWidth;
    showHideIcons();
  });
});

carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousedown", dragStart);

document.addEventListener("touchmove", dragging);
document.addEventListener("mousemove", dragging);

document.addEventListener("touchend", dragStop);
document.addEventListener("mouseup", dragStop);

carousel.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(showHideIcons, 100);
});

showHideIcons();
