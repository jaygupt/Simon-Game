var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  // generates random number from 0 to 3
  var randomNumber = Math.floor(Math.random() * 4);

  // selects random color from buttonColors
  var randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor);

  // adds the randomColor to the end of gamePattern
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
}
