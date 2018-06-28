$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault(); 

	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
	

		clearInterval(theClock);
		generateWin();
	}
	else {
	
		clearInterval(theClock);
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){

	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Congratulations!!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What character is from Konami?", "Who was not a part of the orignal roster?", "Who is most considered a clone character", "Who joined the Roster in Super Smash Bros. Brawl?", "Which item allows a player to preform his Final Smash?", "Who is considered top tier in Super Smash Brothers Brawl", "Which stage hails from the F-Zero Series?", "Who is the largest character ever announced for Super Smash Bros?"];
var answerArray = [["Snake", "Marth", "Ganondorf", "Duck Hunt"], ["Mario","Peach","Captain Falcon","Ness"], ["Ice Climbers", "Luigi", "Ganondorf", "Mewtwo"], ["Pac-Man","Pikachu","King Dedede","Cloud"], ["Smash Sphere", "Final Smash Ball", "Smash Orb", "Smash Ball"], ["Meta Knight","Falco","Captain Falcon","Fox"], ["Norfair", "Big Blue", "Fountain of Dreams", "Fourside"], ["Sonic","Snake","Charizard","Ridley"]];
var imageArray = ["<img class='center-block img-right' src='img/snake.png'>", "<img class='center-block img-right' src='img/Peach.png'>", "<img class='center-block img-right' src='img/ganondorf.png'>", "<img class='center-block img-right' src='img/kingdedede.png'>", "<img class='center-block img-right' src='img/SmashBall.png'>", "<img class='center-block img-right' src='img/metaknight.png'>", "<img class='center-block img-right' src='img/bigblue.png'>", "<img class='center-block img-right' src='img/ridley.png'>"];
var correctAnswers = ["A. Snake", "B. Peach", "C. Ganondorf", "C. King Dedede", "D. Smash Ball", "A. Meta Knight", "B. Big Blue", "D. Ridley"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
;
