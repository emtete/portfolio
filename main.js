const home = document.getElementById("home");
const nav = document.getElementById("navbar");
const clientRect = home.getBoundingClientRect();
const homeBottom = clientRect.bottom - 53;

window.addEventListener("scroll", function () {
  if (homeBottom < window.pageYOffset) {
    nav.classList.add("fixed");
    nav.classList.remove("notFixed");
  }

  if (homeBottom > window.pageYOffset) {
    nav.classList.remove("fixed");
    nav.classList.add("notFixed");
  }
});
