//Scroll effect
function parallax() {
  var s1 = document.getElementById("Table");
  var yPos = 0 - window.pageYOffset;  
  s1.style.top = 0 + yPos/60 + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});
