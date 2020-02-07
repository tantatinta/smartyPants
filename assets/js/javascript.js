var secondsLeft = 60;
var qTracker = 0;
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("startBtn");
var startContainer = document.getElementById("startContainer");
var questionContainer = document.getElementById("questionContainer");
var h1QuestionText = document.getElementById("questionText");
var allQBtns = document.querySelectorAll(".questionBtn");
var count = document.getElementById("count");
var endMessage = document.querySelector("#endMessage");
var intervalId;
var initialsInput;
var saveBtn;
var endofGameText;


startBtn.addEventListener("click", function() {
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    setTime();
    setQuestion();
});

function setTime() {

    intervalId = setInterval(function () {
        secondsLeft--;
        count.textContent = secondsLeft;
        if (secondsLeft === 0) {
           
            endgame();
        }
    }, 1000);
}



function setQuestion() {

    h1QuestionText.textContent = questions[qTracker].title;

    for (var i = 0; i < questions[qTracker].choices.length; i++) {
        var button = document.querySelector("#q" + i);
        button.setAttribute("onclick", "scoring(" + i + ")");
        button.textContent = questions[qTracker].choices[i];
    }
}

function scoring(answer) {

    if (questions[qTracker].choices[answer] != questions[qTracker].answer) {
        secondsLeft = secondsLeft - 5;
    } 

    qTracker++;
    if (qTracker === questions.length) {
        endgame();
    }
    else setQuestion();
}

function endgame() {
    console.log("game ended");
    clearInterval(intervalId);
    endMessage.innerHTML="<h1>End of game!</h1>";
    initialsInput = document.createElement('input');
    initialsInput.setAttribute("type", "text");
    saveBtn = document.createElement('button');
    saveBtn.textContent = "save";
    endofGameText = document.createElement('div');
    endofGameText.textContent = "Your score is: " + secondsLeft + ". Save your initials.";
    
    endMessage.appendChild(endofGameText);
    endMessage.appendChild(initialsInput);
    endMessage.appendChild(saveBtn);
    saveBtn.classList.add('btn', 'bg-info');

   
    saveBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("button works");

        var user = {
            initials: initialsInput.value.trim(),
            score: secondsLeft
        }
        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));

        newLocation();
      
    });
   
}

function newLocation() { 
    window.location.href = "./assets/html/highScores.html"; 
    console.log(window.location.href);
} 






