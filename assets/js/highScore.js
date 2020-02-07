window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


var clearHSBtn = document.querySelector("#clearHS");
var mainD = document.getElementById("main");
var newP = document.createElement("p");
var user = JSON.parse(localStorage.getItem("user"));
var initials = user.initials;
var score = user.score;

mainD.children[0].children[0].children[0].appendChild(newP);
newP.textContent = initials + " - " + score;
console.log(newP.textContent);


clearHSBtn.addEventListener("click", function(){
  cleanup();   
}) 
    
function cleanup() {
    localStorage.clear();
    newP.textContent = " ";
}

