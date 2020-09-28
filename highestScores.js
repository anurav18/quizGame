
//Get the Elements by id
var InitialsDisplayEl = document.getElementById("initials");
var ScoreDisplayEl = document.getElementById("Score");

//Get the value of each element using its key value
InitialsDisplayEl.textContent = localStorage.getItem("Initials");
ScoreDisplayEl.textContent = localStorage.getItem("Highest score");