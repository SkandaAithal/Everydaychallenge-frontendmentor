let x = 0;
document.querySelector(".hamburger").addEventListener("click", function () {
  if (x === 0) {
    document.querySelector(".dropdown").style.visibility = "visible";
    document.querySelector(" .body-layout main h1").style.display = "none";
    document.querySelector(" .body-layout main svg").style.display = "none";
    x = 1;
  } else {
    document.querySelector(".dropdown").style.visibility = "hidden";
    document.querySelector(" .body-layout main h1").style.display = "block";
    document.querySelector(" .body-layout main svg").style.display = "block";
    x = 0;
  }
});
