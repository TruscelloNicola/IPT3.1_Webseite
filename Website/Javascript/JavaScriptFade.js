// Fade in script for elements beyond the wallpaper
function fadeIn(){
let element = document.getElementById("loader");
let opacity = 0;
let fadeIn = setInterval(() => {
   element.style.opacity = opacity;
   opacity += 0.01;
}, 10);

};