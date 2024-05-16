const burger = document.getElementById("burger");
const overlay = document.getElementById("overlay");
const navmenu = document.getElementById("navmenu");
let open = false;

burger.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  navmenu.classList.toggle("hidden");
  document.body.classList.toggle("overflow-y-hidden");

  open = !open;

  if (open) {
    burger.src = "images/icon-close.svg";
  } else {
    burger.src = "images/icon-hamburger.svg";
  }
});
