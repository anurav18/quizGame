function startTimer(duration, display) {
    var timer = duration;
    
  const interval =   setInterval(function () {
         var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        var minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        timer = timer - 1;
// console.log(timer);
if(timer == -1)
{
    clearInterval(interval);
    // alert("The quiz has been ended");
}
    }, 1000);
}


let questions = [{

    question:"How are you?",
    options:["good","bad","not atol good"],
    answer:"good"
},

{
    question:"How are you anu?",
    options:["good","bad","not atol good"],
    answer:"bad"
}
];

var startBtnEl = document.getElementById("start-quiz");
var quizDescEl = document.querySelector(".quiz-description");
var quizDuration = 60 * 0.25;
var quizOptEl = document.querySelector(".quiz-options");
var quizQueEl = document.querySelector(".quiz-question");
timeDisplay = document.querySelector('#time');
var optionsBtnEl = document.querySelector(".options-class");

quizOptEl.addEventListener("click",function(event)
{
event.preventDefault();
alert(event.target.textContent);
alert(event.target.getAttribute('index-value'));
var ind = event.target.getAttribute('index-value');
if(event.target.textContent === questions[ind].answer)
{
 alert('hurray answer matched');
}
else{
    alert('answer not matched');
}
});





startBtnEl.addEventListener("click", function(){

    quizDescEl.remove();
    startBtnEl.remove();
    startTimer(quizDuration, timeDisplay); 
    var i = 0;
    quizQueEl.textContent = questions[i].question;
    for(var j= 0 ; j <3 ;j++)
        {

            //create a button
            var btnEl = document.createElement("button");

            //set the content for the button
            btnEl.textContent = questions[i].options[j];

            //create an id attribute
            btnEl.setAttribute("index-value",i);
            btnEl.setAttribute("id",j);
            btnEl.setAttribute("class","options-class");

            //create a margin 10px
            btnEl.setAttribute("style","margin:10px;");

            var breakEl = document.createElement("br");

            //append it to the div
            quizOptEl.appendChild(btnEl);
            quizOptEl.appendChild(breakEl);
            
        }
 
});



