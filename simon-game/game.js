var buttonColours = ["red" , "blue" , "green" , "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var Level=0;
var started=false;

function playSound(name){
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColour)
{
	$("#" + currentColour).addClass("pressed");
	setTimeout(function(){
		$("#" + currentColour).removeClass("pressed");
	},100);
}

function checkAnswer(currentLevel){
	if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
	{
		console.log("Success");
		if (userClickedPattern.length === gamePattern.length)
		{
			setTimeout(function () {
          	NextSequence();
        	}, 1000);
        }
	}
	else
	{
		console.log("Wrong");
		playSound("wrong");
		$("body").addClass("game-over");
    	setTimeout(function () {
    		$("body").removeClass("game-over");
    	}, 200);
    	$("#level-title").text("Game Over, Press Any Key to Restart");
    	startOver();
	}
}

function startOver() {
	Level = 0;
  	gamePattern = [];
 	started = false;
}

$(".btn").on("click",function()
{
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPattern.length-1);
});

$(document).on("keypress", function(event){
	if(!started)
	{
		NextSequence();
		started=true;
	}	
})

function NextSequence()
{
	userClickedPattern = [];
	$("#level-title").text("Level " + Level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);
	Level++;
}

