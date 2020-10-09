userClickedPattern = [];
gamePattern =[]; 
buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}
if ($(document).keypress()){
var randomChosenColour = buttonColors[nextSequence()];
// $("#red").addClass("pressed");
//gamePattern.push(randomChosenColour);



$("#" + randomChosenColour).fadeOut(100).fadeIn(100);//.fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}
$(".btn").click(handler);
function handler(){
    var userChosenColour = this.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
}

function playSound(color) {
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function (){
        $("#"+currentColour).removeClass("pressed")
    },100);    
}
