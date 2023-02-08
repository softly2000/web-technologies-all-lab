/* Отключения CSS*/
let toggleCSSButton = document.getElementById("toggleCSS");

toggleCSSButton.addEventListener("click", function() {
  let stylesheets = document.styleSheets;
  for (var i = 0; i < stylesheets.length; i++) {
    stylesheets[i].disabled = !stylesheets[i].disabled;
  }
});