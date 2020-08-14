var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    started = true;

    setTimeout(function () {
      nextSequence();
    }, 500);
  }
});

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);

  // random number from 0 to 3
  var randomNumber = Math.floor(Math.random() * 4);

  // using randomNumber, get random color from buttonColors
  var randomChosenColor = buttonColors[randomNumber];

  setTimeout(function() {
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
  }, 0);

  gamePattern.push(randomChosenColor);
}

$(".btn").click(function() {
  var userChosenColor = this.id;

  playSound(userChosenColor);
  animatePress(userChosenColor);

  userClickedPattern.push(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 150);
}

function checkAnswer(currentPosition) {
  if (userClickedPattern[currentPosition] != gamePattern[currentPosition]) {
    console.log("incorrect");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  } else {
    if ((currentPosition + 1) === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
