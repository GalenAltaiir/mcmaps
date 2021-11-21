var elem = document.getElementById("hide");
function slide() {
  elem.classList.toggle('showMenu');
}

const mediaQuery = window.matchMedia('(max-width: 992px)')
// Check if the media query is true
if (mediaQuery.matches) {
  slide();
}