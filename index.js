var randomNumber1 = Math.floor(Math.random()*6 )+ 1;
       //no. between 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
    //dice1.png - dice6.png
var randomDiceImageSource1= "images/" + randomDiceImage;   //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImageSource1);

// for second dice
var randomNumber2 = Math.floor(Math.random()*6) + 1;
              //no. between 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";    //images/dice1.png - images/dice6.png
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",  randomImageSource2);
// OR ---->>>>
document.querySelectorAll("img")[1].setAttribute("src",  randomImageSource2);

//OR    Whole code for 2nd dice like this------>>>
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + Math.floor(Math.random()*6) + 1 + ".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳";
}
else {
  document.querySelector("h1").innerHTML = "Drow! 📍";
}
