var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice_select1 = document.querySelectorAll("img")[0];
var dice1_img = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice_select2 = document.querySelectorAll("img")[1];
var dice2_img = "images/dice" + randomNumber2 + ".png";

dice_select1.setAttribute("src", dice1_img);
dice_select2.setAttribute("src", dice2_img);

if (randomNumber1 > randomNumber2) {
  var heading = document.querySelector("h1");
  heading.innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  var heading = document.querySelector("h1");
  heading.innerHTML = "Player 2 Wins";
} else {
  var heading = document.querySelector("h1");
  heading.innerHTML = "Draw";
}
