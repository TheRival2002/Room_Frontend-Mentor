const mobileToggle = document.querySelector(".mobile-toggle");
const primaryNav = document.querySelector(".primary-nav");

mobileToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  primaryNav.hasAttribute("data-visible")
    ? mobileToggle.setAttribute("aria-expanded", true)
    : mobileToggle.setAttribute("aria-expanded", false);
  darkenOverlay();
});

function darkenOverlay() {
  primaryNav.hasAttribute("data-visible")
    ? document.body.classList.add("darken-overlay")
    : document.body.classList.remove("darken-overlay");
}

// carousel

const slideItems = document.querySelectorAll(".slide-item");
const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");

let counter = 0;

nextSlide.addEventListener("click", () => {
  counter++;
  counter >= slideItems.length ? (counter = 0) : counter;
  changeSlide();
});

prevSlide.addEventListener("click", () => {
  counter--;
  counter < 0 ? (counter = slideItems.length - 1) : counter;
  changeSlide();
});

function changeSlide() {
  slideItems.forEach((slide, index) => {
    if (index === counter) {
      slide.setAttribute("aria-current", true);
    } else {
      slide.setAttribute("aria-current", false);
    }
  });
}
