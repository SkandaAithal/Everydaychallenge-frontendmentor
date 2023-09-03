document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".dropdown").style.visibility = "visible";
  document.querySelector(" .body-layout main h1").style.display = "none";
  document.querySelector(" .body-layout main svg").style.display = "none";
});
document.querySelector("main").addEventListener("click", function () {
  document.querySelector(".dropdown").style.visibility = "hidden";
  document.querySelector(" .body-layout main h1").style.display = "block";
  document.querySelector(" .body-layout main svg").style.display = "block";
});
