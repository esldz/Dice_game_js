var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; 
var randomImageSource = "images/" + randomDiceImage; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Winner 1";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Winner 2";
}
else
{
    document.querySelector("h1").innerHTML="scoreless";    
}