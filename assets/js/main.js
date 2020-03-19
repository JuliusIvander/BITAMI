const hamburger = document.querySelector(".kanan .hamburger");

function init() {
  if (hamburger !== null) {
    hamburger.addEventListener("click", function() {
      document.querySelector(".kanan").classList.toggle("active");
      document.querySelector(".bar1").classList.toggle("active");
      document.querySelector(".bar2").classList.toggle("active");
      document.querySelector(".bar3").classList.toggle("active");
    });
  }
}

init();
