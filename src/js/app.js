import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// MENU
// const menuIcon = document.querySelector(".icon-menu");

document.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  const menuIcon = e.target.closest(".icon-menu");
  if (!menuIcon) return;
  document.documentElement.classList.toggle("menu-open");
}

// SLIDER
const slider = document.querySelector(".reviews__slider");
const counter = document.querySelector(".reviews__count>span");
const arrowPrev = document.querySelector(".reviews__prev");
const arrowNext = document.querySelector(".reviews__next");

arrowPrev.addEventListener("click", prevSlide);
arrowNext.addEventListener("click", nextSlide);

function prevSlide(e) {
  const arrow = e.target.closest(".reviews__prev");
  if (!arrow) return;
  let slides = [...document.querySelectorAll(".reviews__slide")];
  const newSlide = slides[slides.length - 1];
  newSlide.remove();
  slider.insertAdjacentElement("afterbegin", newSlide);
  slides.forEach((slide) =>
    slide.dataset.slide !== newSlide.dataset.slide
      ? slide.classList.remove("active")
      : slide.classList.add("active")
  );
  slides = [...document.querySelectorAll(".reviews__slide")];
  const activeSlide = slides[0];
  counter.textContent = `0${activeSlide.dataset.slide}`;
}

function nextSlide(e) {
  const arrow = e.target.closest(".reviews__next");
  if (!arrow) return;
  let slides = [...document.querySelectorAll(".reviews__slide")];
  const newSlide = slides[0];
  newSlide.remove();
  slider.insertAdjacentElement("beforeend", newSlide);
  slides.forEach((slide) => slide.classList.remove("active"));
  slides = [...document.querySelectorAll(".reviews__slide")];
  const activeSlide = slides[0];
  activeSlide.classList.add("active");
  counter.textContent = `0${activeSlide.dataset.slide}`;
}

// FIXED HEADER
const header = document.querySelector(".header__top");

window.addEventListener("scroll", stickHeader);

function stickHeader() {
  if (window.scrollY > 0) header.classList.add("fixed");
  else header.classList.remove("fixed");
}
