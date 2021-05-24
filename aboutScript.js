window.addEventListener("load", loaded);

function loaded(){
    //upperSquare slides in from the left when loading page
    document.getElementById("upperSquare").setAttribute("class", "showUpperSquare");

    //slides in lowerSquare in from the right 
    document.getElementById("lowerSquare").setAttribute("class", "showLowerSquare");
    
};

$(document).ready(function(){
    $("#phpDot").fadeIn(2500);
    $("#pythonDot").fadeIn(2500);
    $("#jsDot").fadeIn(2500);
    $("#htmlDot").fadeIn(3500);
    $("#cssDot").fadeIn(3500);
    $("#sqlDot").fadeIn(3500);
    $("#uiuxDot").fadeIn(3500);
    $("#cDot").fadeIn(4000);
    $("#javaDot").fadeIn(4000);
});


