let hamburgerIcon = document.querySelector("nav .icons");
let mbMenuCloseIcon = document.querySelector(".mobile-menu .close-icon svg");
let mobileMenu = document.querySelector(".mobile-menu");
let overlay = document.querySelector(".overlay");
let mbMenuList = document.querySelector("  .mobile-menu ul");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.style.opacity = "0";
  hamburgerIcon.style.scale = "0";
  hamburgerIcon.style.transition = "all .3s";
  mobileMenu.style.width = "67.5%";
  mbMenuList.style.paddingLeft = "1.5rem";
  mobileMenu.style.transition = "width .8s";
  overlay.style.display = "block";
  mbMenuCloseIcon.style.rotate = "180deg";
  mbMenuCloseIcon.style.scale = "1";
  mbMenuCloseIcon.style.transition = "all .5s .3s";
});

mbMenuCloseIcon.addEventListener("click", function () {
  hamburgerIcon.style.opacity = "1";
  hamburgerIcon.style.scale = "1";
  hamburgerIcon.style.transition = "all .3s .6s";
  mobileMenu.style.width = "0%";
  overlay.style.display = "none";
  mbMenuCloseIcon.style.rotate = "360deg";
  mbMenuCloseIcon.style.scale = "0";
  mbMenuCloseIcon.style.transition = "all .5s";
});
