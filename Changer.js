//Create a variable for newwrgbcolor
var newBGColor = document.getElementById("newwrgbcolor");
var ColorChangeButton = document.getElementById("ColorChangeButton");

ColorChangeButton.addEventListener("click", function (){
    document.body.style.backgroundColor = newBGColor.value;

})