//when time value equals zero OR when index of answers array equals the specific total of questions, all processes stop
// number of points collected can be saved with your name only if you have a high score (calculate highest possible score and make a condition that to be able to store it, the score has to be greater than x)   

var score = 0;
var answerArray = [];

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;


var startBtn = document.getElementById("startBtn");
var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var h1QuestionText = document.getElementById("questionText");

var allQBtns = document.querySelectorAll(".questionBtn");
// var wrongAnswers = document.getElementsByClassName("wrong");
// var correctAnswers = document.getElementsByClassName("correct");
var count = document.getElementById("count");
var qTracker = 0;

startBtn.addEventListener("click", function() {
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    setTime();
    setQuestion();
});

function setTime() {
        //var intervalId is what allows us to stop the function 
        var intervalId = setInterval(function() {
      //decrement 1 from number of seconds left
          secondsLeft--;
          //grabs the timeEl and changes text content to secondsleft plus string
          count.textContent = secondsLeft;
          if(secondsLeft === 0) {
            clearInterval(intervalId);
            //create conditions for wrong answer=less time
            //create condition for all answers in, clear interval
            // create game over function;
          }
        }, 1000);
    }

function setQuestion() {
    // document.querySelector("#questionText").textContent = "These are valid attribute types for input tags in HTML forms:";
    // h1QuestionText.textContent = "These are valid attribute types for input tags in HTML forms:";
    // btnOptionOne.value = "form, action, and method";
    // btnOptionTwo.value = "label, action, and id";
    // btnOptionThree.value = "type, name, and value";
    
    h1QuestionText.textContent = questions[qTracker].title;
    
    for (var i = 0; i < questions[qTracker].choices.length; i++) {
        var button = document.querySelector("#q" + i);
        button.textContent = questions[qTracker].choices[i];
    }

         
}

for (var j = 0; j < allQBtns.length; j++) {
    allQBtns[j].addEventListener("click", function() {
console.log(this);
qTracker++;
setQuestion();

    })
}


function gameOver(){
    
}

function highScoreSave() {

}

//This is my seconds count in number, currently 60 sec
// var timeEl = document.getElementById("timeCount");
// var secondsLeft = 60;

//create timer function FOR TIMER DIV Interval added to click event (CLICK EVENT AFFECTS BOTH TIMER DIV AND QUESTION DIV). trigger timer. create var to stop timer from zero time AND var to collect number of values from answers to stop game when all questions are answered
//the timer loads once for all questions and is always visible

// 




