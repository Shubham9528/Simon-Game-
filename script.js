let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level=0;
var started = false;

$(document).keypress(function (event){
    if(!started)
    {
        $("h1").text("Level " + level);
        nextSequence();
        started=true;
        
        
    }
})

$(".btn").click(function () {//this is used to check which button is clicked
    if(started)
    {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);

    }

    

    
    


});
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel])//Here we are checking if the game pattern is equal to user clicked pattern in the same index
{
    console.log("Suceess"); 
    if(userClickedPattern.length===gamePattern.length)
    {
        setTimeout (function(){
            nextSequence();
            
        },1000);
    }
}
else{
    console.log("Wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
        
    },1000)
    var wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play() 
    started = false;
    $("h1").text("Press A Key to Start");
    level=0;
    gamePattern = [];

}

}


// function handler(randomChosenColor) {
// userClickedPattern.push(randomChosenColor);
//     var id = randomChosenColor;
//     console.log("randomChoice"+userClickedPattern);


// }
function playSound(colorSound) {
    switch (colorSound) {
        case "green":
            var greenAudio = new Audio("./sounds/green.mp3");
            greenAudio.play();
            break;
        case "red":
            var redAudio = new Audio("./sounds/red.mp3");
            redAudio.play();
            break;
        case "yellow":
            var yellowAudio = new Audio("./sounds/yellow.mp3");
            yellowAudio.play();
            break;
        case "blue":
            var blueAudio = new Audio("./sounds/blue.mp3");
            blueAudio.play();
            break;
        // default:
        //     var defaultAudio = new Audio("./sounds/wrong.mp3");
        //     defaultAudio.play();
        //     break;

    }


}


function nextSequence() {

    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //console.log(gamePattern)
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //handler(randomChosenColor);
    playSound(randomChosenColor);
    
    console.log(gamePattern);
    
     
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {//inbuild function to setTimeout
        $("#" + currentColour).removeClass("pressed")
    }, 100);
    //.delay(50);
    



}











