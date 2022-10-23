var highscoreBtn = document.querySelector("#highscore-link");


highscoreBtn.addEventListener("click", () => {
  document.location.replace("./highscore.html");
});


//DOM hooks for index.html//
var body = document.body;
var highscoreBtn = document.querySelector("#highscore-link");
var mainPromt = document.getElementById("main-promt");
var mainButtons = document.querySelector("#main-content");
var secondaryPromt = document.querySelector("#secondary-promt");

//DOM hooks for highscore.html//

var scoreList = document.querySelector("#score-list");
var clearScoreBtn = document.querySelector("#clear-scores");
var allDoneBtn = document.querySelector("#homepage-link");
var timer = document.querySelector("#timer");
var timeLeft = 100;

//Variables for quiz content//

var q1 = "1. Which of the following best describes a Web API?";
var q2 = "2. Your colleague notices that when she clicks on a <p> element on her page, handlers run on <p> and on <p>'s parent elements as well. She asks you to help her debug. Which of the following is most likely?";
var q3 = "3. Which property can you use in order to implement event delegation?"
var q4 = "4.Which statement best describes what is happening to data when it is persisted to local storage.";

//Main-page//

function mainPage() {
  timer.textContent = "Time Left: " + timeLeft;
  mainPromt.textContent = "Code Quiz Challenge";
  mainButtons.textContent = "Start Quiz";

}
mainPage();

//Quiz-page//
function quizStart() {
  //TIMER//
  mainButtons.addEventListener("click", function () {


    var timerInterval = setInterval(function () {

      var countDown = timeLeft--;
      timer.textContent = "Time Left: " + countDown;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  })
}


quizStart();

function timeUp() {

}

//Score Page //