//variable declaration

let userData = JSON.parse(localStorage.getItem("userData"));
let clearScoreEl = document.getElementById("center");
let rowEl = document.querySelector(".scores-table");
let redirectEl = document.getElementById("play-again");

//Sorting the scores
userData.sort(function(a,b){return b.score - a.score});

// Adding Scores to the table
for (let i = 0; i < userData.length; i++) 
{
var newrow = document.createElement("tr");
var newCol1 = document.createElement("td");
var newCol2 = document.createElement("td");
newCol1.textContent = userData[i].name;
newCol2.textContent = userData[i].score;
newrow.appendChild(newCol1);
newrow.appendChild(newCol2);
rowEl.appendChild(newrow);
}

//clearing the scores
clearScoreEl.addEventListener("click",function(){
    while(rowEl.firstChild)
    {
        rowEl.removeChild(rowEl.firstChild);
    }
    localStorage.clear();
})

//Play Again
redirectEl.addEventListener("click",function(){
    location.href='./index.html';
})



