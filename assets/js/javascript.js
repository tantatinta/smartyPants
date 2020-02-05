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
var finalScore;

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
// }

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
     
    var endofGameText= document.createElement('div')
    endofGameText.textContent = "Your score is: " + secondsLeft;
    
    endMessage.appendChild(endofGameText);
    //create button
    //

}

function highScoreSave() {

}








