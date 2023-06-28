//Scroll effect
function parallaxAux() {
  var s1 = document.getElementById("AuxTable");
  var yPos = 0 - window.pageYOffset/1;  
  s1.style.top = 0 + yPos/60 + "%"; }

window.addEventListener("scroll", function(){
    parallaxAux(); 
});
