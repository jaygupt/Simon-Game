var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  // generates random number from 0 to 3
  var randomNumber = Math.floor(Math.random() * 4);

  // selects random color from buttonColors
  var randomChosenColor = buttonColors[randomNumber];

  // flash the button with the color of randomChosenColor
  $("#" + randomChosenColor).fadeOut(75).fadeIn(75);

  // play audio of chosen button color
  // var audioOfColor = new Audio("sounds/" + randomChosenColor + ".mp3");
  // audioOfColor.play();
  playSound(randomChosenColor); 

  // adds the randomColor to the end of gamePattern
  gamePattern.push(randomChosenColor);
}

$(".btn").click(function() {
  // userChosencolor = button color that user has clicked
  var userChosenColor = this.id;

  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

// input: name of the color
// output: sound of the color
function playSound(name) {
  var audioOfColor = new Audio("sounds/" + name + ".mp3");
  audioOfColor.play();
}
