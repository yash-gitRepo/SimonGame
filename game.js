userClickedPattern = [];
gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

function randomNumber() {
    // console.log("random number")
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}


function nextSequence() {

    // console.log("Next Seq")
    for(var i=0; i<=level; i++)
    {
        // console.log("Next Seq inside FOR")
        var randomChosenColour = buttonColors[randomNumber()];
        // $("#red").addClass("pressed");
        gamePattern.push(randomChosenColour);

        $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
        // console.log("fade in and out")
        //.fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        $("#level-title").text("Level "+ level);    
        //checkAnswer(level); 
    }
}


$("body").keyup(function(e){
    if(e.code == "Space"){
        console.log("Space")
        nextSequence();
    }
});


// $(document).addEventListener("keyup",function(event) {
//     console.log("key pressed")

    // nextSequence();
// });

// document.addEventListener("keypress", function (event) {
//     nextSequence();
// });

function checkAnswer(currentLevel) {
    console.log("check answer")
    for(var i=0; i<=level; i++) {
        // console.log("check answer for loop")
        $().ke
        if(gamePattern[i] === userClickedPattern[i]) {
            console.log("check condition")
            console.log(`gamePattern ${gamePattern}\n userClickedPattern ${userClickedPattern}`)
            // break
             nextSequence();
        }

        else {
            console.log(`gamePattern ${gamePattern}\n userClickedPattern ${userClickedPattern}`)
            alert("Out!!!");
        }
    }
    level++;
}



// $(".btn").click(handler);
// function handler() {
//     // console.log("I clicked")
//     var userChosenColour = this.id;
//     playSound(userChosenColour);
//     animatePress(userChosenColour);
//     userClickedPattern.push(userChosenColour);
// }

function playSound(color) {
    // console.log("sound played")
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    // console.log("pressed animation")
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed")
    }, 100);
}
