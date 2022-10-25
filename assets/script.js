var highscoreBtn = document.querySelector("#highscore-link");


highscoreBtn.addEventListener("click", () => {
  document.location.replace("./highscore.html");
});


//DOM hooks for index.html//
var body = document.body;
var highscoreBtn = document.querySelector("#highscore-link");
var mainPrompt = document.getElementById("main-prompt");
var mainButtons = document.querySelector("#main-buttons");
var quizChoices = document.querySelector("#quiz-choices");
var secondaryPrompt = document.querySelector("#secondary-promt");
var currentIndex = 0
// var choice1 = document.createElement("button");
// var choice2 = document.createElement("button");
// var choice3 = document.createElement("button");
// var choice4 = document.createElement("button");

//DOM hooks for highscore.html//

var scoreList = document.querySelector("#score-list");
var clearScoreBtn = document.querySelector("#clear-scores");
var allDoneBtn = document.querySelector("#homepage-link");
var timer = document.querySelector("#timer");
var timeLeft = 100;

//Variables for quiz content//

//////objects for each question and choices//////
var questions = [
  {
    title: "1. Which of the following best describes a Web API?",
    choices: ["Web APIs are low level code (say C or C++) that directly control the computer's GPU or other graphics functions.",

      "Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.",

      "Web APIs are built into your web browser and contain methods that allow us to manipulate a web page via JavaScript.",

      "Web APIs are a part of the JavaScript language itself and are built into your browser."],
    answer: "Web APIs are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web."
  },

  {
    title: "2. Your colleague notices that when she clicks on a <p> element on her page, handlers run on <p> and on <p>'s parent elements as well. She asks you to help her debug. Which of the following is most likely?",

    choices: ["The parent node of <p> is triggering a bubbling event that is bubbling down towards <p> when it is clicked.",
      "She forgot to add event.preventDefault() in her script.js file.",

      "A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors.",

      "She added an event listener in the wrong place in her html file."
    ],

    answer: "A bubbling event is occurring that starts with the target element, <p>, and is then running handlers on <p>'s parent and other ancestors."
  },

  {
    title: "3. Which property can you use in order to implement event delegation?",

    choices: ["event.preventDefault()",

      "event.stopPropagation()",

      "event.addEventListener()",

      "event.target"],

    answer: "event.target"
  },

  {
    title: "4.Which statement best describes what is happening to data when it is persisted to local storage?",

    choices: ["The data is stored in the client or browser.",

      "The data is stored in the window called localStorage.",

      "The data is stored under the Applications tab in Chrome Dev Tools.",

      "The data is stored in the database in the backend."

    ],

    answer: "The data is stored in the client or browser."
  }
]


//Main-page//

function mainPage() {
  timer.textContent = "Time Left: " + timeLeft;
  mainPrompt.textContent = "Code Quiz Challenge";
  mainButtons.textContent = "Start Quiz";
  quizStart();
}
mainPage();

//Quiz-page//
function quizStart() {

  //TIMER runs 100seconds backwards//

  mainButtons.addEventListener("click", function () {
    quizPage();
    var timerInterval = setInterval(function () {

      var countDown = timeLeft--;
      timer.textContent = "Time Left: " + countDown;
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        mainPrompt.textContent = "You Failed!";
        mainPrompt.style.fontSize = "200px";


      }
    }, 1000);
  });

  //hide start quiz button, prompt questions and choices//
  function quizPage() {
    if (mainButtons.style.display === "none") {
      mainButtons.style.display = "block";
    } else {
      mainButtons.style.display = "none";
      getQuestion(currentIndex);
    }

    //For loop to prompt questions in order//
    function getQuestion(index) {
      console.log("hello", index)
      // get current question object from array
      var currentQuestion = questions[index];
      // update title with current question
      var titleEl = document.getElementById("main-prompt");
      titleEl.textContent = currentQuestion.title;
      // clear out any old question choices
      // mainPrompt.innerHTML = "";
      // loop over choices
      for (var i = 0; i < currentQuestion.choices.length; i++) {
        // create new button for each choice
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        // choiceNode.textContent = i + 1 + '. ' + choice;
        choiceNode.textContent = choice;

        choiceNode.addEventListener("click", function (e) {

          e.preventDefault();
          console.log(currentIndex);
          //increment current index and pass into getQuestion(index)//
          currentIndex += 1;
          getQuestion(currentIndex);
          console.log(currentIndex);

          //10 seconds deducted when choices other than answer is clicked//
          // function takeOffTime() {
          //   var wrongAnswer = currentQuestion.answer === false;
          //   console.log(wrongAnswer);
          //   wrongAnswer.addEventListener("click", function (ev) {
          //     ev.preventDefault();
          //     timeLeft - 10;
          //   });
          // }
          
          // takeOffTime()

          console.log(currentQuestion.answer);

        });
        // display on the page
        mainPrompt.appendChild(choiceNode);


      }
    }

  }

}
//FUNCTION that subtracts time if wrong anwer is clicked//

