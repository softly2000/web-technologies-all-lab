let marquee = document.getElementById("myMarquee");

marquee.addEventListener("mouseover", function() {
    this.stop();
    this.querySelector(".marquee-title").classList.add("expanded");
    this.querySelector("#title").classList.add("hidden");
});

marquee.addEventListener("mouseout", function() {
    this.start();
    this.querySelector(".marquee-title").classList.remove("expanded");
    this.querySelector("#title").classList.remove("hidden");
});
/* Отключения CSS*/
let toggleCSSButton = document.getElementById("toggleCSS");

toggleCSSButton.addEventListener("click", function() {
  let stylesheets = document.styleSheets;
  for (var i = 0; i < stylesheets.length; i++) {
    stylesheets[i].disabled = !stylesheets[i].disabled;
  }
});
/* Просмотр кода html 
const button = document.getElementById("button-html");
button.addEventListener("click", function() {
    document.body.innerText = document.documentElement.innerHTML;
});*/



