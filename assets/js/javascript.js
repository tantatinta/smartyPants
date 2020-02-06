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

// for (var j = 0; j < allQBtns.length; j++) {
//     allQBtns[j].addEventListener("click", function () {
//         console.log(this);
//         qTracker++;
//         setQuestion();

//     })
// }0

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

var initialsInput;
var saveBtn;
var endofGameText;
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
    //when you save you can see all the high scores and also CLEAR them and go back to the start of the quiz
    //
    saveBtn.addEventListener("click", function(event){
        event.preventDefault();
        console.log("button works");

        var user = {
            initials: initialsInput.value.trim(),
            score: secondsLeft
        }
        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));

        
    });
}




// function saveInitial(){

// }

//     var topScores = {
//         initials: initialsInput.value.trim(),
//         score: secondsLeft
//     };

//     if (topScores.initials === "") {
//         displayMessage("Why keep that great score in complete anonimity?")
//     }

//     //set new submission
//     localStorage.setItem("Top Scores", JSON.stringify(topScores));

// //create button and input
// saveBtn.addEventListener("click", function() {

// });

// function addInitials() {

//     localStorage.setItem("topScores", JSON.stringify(a));
// }

// function showHighscores() {
//     JSON.parse(localStorage.getItem("Top Scores"));
//     endofGameText.textContent = //initials plus secondsLeft

// }








