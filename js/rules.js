const timelines = document.querySelectorAll(".timeline__right");

const trackers = document.querySelectorAll(".timeline__tracker");

window.addEventListener(
  "scroll",
  (e) => {
    timelines.forEach((timeline, i) => {
      //  Animate on scroll
      if (trackers[i].offsetTop > 0) {
        timeline
          .querySelector(".timeline__content")
          .classList.add("animate-on-scroll");
      } else {
        timeline
          .querySelector(".timeline__content")
          .classList.remove("animate-on-scroll");
      }

      //       Timeline progress
      timeline.style.background = `linear-gradient(180deg, rgb(255, 164, 5) 0%, rgb(255, 164, 5) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) 100%)`;
    });
  },
  { passive: true }
);
