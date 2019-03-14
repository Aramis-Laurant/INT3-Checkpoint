//Adds buttons to both images
var display=document.getElementById("TheFirstCreator");
var display=document.getElementById("TheFirstComputer");

TheFirstComputer.addEventlister("click", function(){
    display.innerHTML = "The first programmable computer was created by Konrad Zuse for the pupose for computating eqations."
});

TheFirstCreator.addEventlister("click", function(){
    display.innerHTML = "Charles Babbage was a math mathematician who was born on 1781 and he created the first concept for digital programing"
});
