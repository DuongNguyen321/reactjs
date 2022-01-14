let searchBtn = document.getElementById("search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.getElementById("login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.getElementById("form-close");
let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
let Navbar = document.querySelector(".Navbar");
let menuBtn = document.getElementById("menu-btn");
let theme = document.getElementById("theme-link");
let btnToggle = document.querySelector(".btn-toggle");
// let moon = document.querySelector(".fa-moon");
// let sun = document.querySelector(".fa-sun-o");

// console.log(videoBtn);

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
    console.log("đổi video");
  });
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { delay: 2500, disableOnInteraction: !1 },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { delay: 2500, disableOnInteraction: !1 },
  breakpoints: {
    450: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    991: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  },
});

// menuBtn.onclick = () => {
//   Navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   Navbar.classList.remove("active");
// };
document
  .querySelectorAll(".about .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about .video-container .video").src = src;
    };
  });

btnToggle.addEventListener("click", function () {
  if (theme.getAttribute("href") == "/Style/style.css") {
    theme.href = "/Style/night.css";
    btnToggle.classList.remove("fa-moon");
    btnToggle.classList.add("fa-sun-o");
    console.log("Đảk");
  } else {
    theme.href = "/Style/style.css";
    btnToggle.classList.add("fa-moon");
    btnToggle.classList.remove("fa-sun-o");
    console.log("Light");
  }
});

AOS.init({
  duration: 800,
  offset: 150,
});
