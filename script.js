//Array of questions for the quiz

let questions = [{
    question:"Who was the Inventor of JavaScript?",
    options:["Satya Nadella","Anushree","Tim Cook","Brendan Eich"],
    answer:"Brendan Eich"
},

{
    question:"who is the father of CSS?",
    options:["Wium Lie","Babu khan","Sundhar Pichai","Barber"],
    answer:"Wium Lie"
},
{
    question:"who is the inventor of HTML?",
    options:["Wium Lie","Tim Berners-Lee","Mark","Amrananda"],
    answer:"Tim Berners-Lee"
},
{
    question:"who is the founder of Facebook?",
    options:["Tim Cook","Mark","Justin Beber","jackson"],
    answer:"Mark"
},
{
    question:"who is the founder of Google?",
    options:["Sundar Pichai","Satya Nadella","Sergey Brin","Justin"],
    answer:"Sergey Brin"
},
{
    question:"who is the founder of Apple?",
    options:["Sundar Pichai","Satya Nadella","Steve Jobs","Erin Smith"],
    answer:"Steve Jobs"
}
];

//Timer Function
function startTimer(duration, display) {
    var timer = duration;
    
  const interval =   setInterval(function () {
         var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        var minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        timer = timer - 1;
if(timer == -1)
{
    clearInterval(interval);
}
    }, 1000);
}

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
var ind = event.target.getAttribute('index-value');
if(event.target.textContent === questions[ind].answer)
{
  count = ++ind;
  quizDuration = quizDuration + 5;
  startTimer(quizDuration, timeDisplay);
  setOptions(count);
}
else{
   count = ++ind; 
   quizDuration = quizDuration - 5;
   startTimer(quizDuration, timeDisplay);
   setOptions(count);
}
});




//Start Quiz Trigger
startBtnEl.addEventListener("click", function(){

    quizDescEl.remove();
    startBtnEl.remove();
    startTimer(quizDuration, timeDisplay); 
    setOptions(0);
 
});

//setting Options and the Question Required

function setOptions(i){

    while(quizOptEl.firstChild)
    {
      quizOptEl.removeChild(quizOptEl.firstChild);
    }
    quizQueEl.textContent = questions[i].question;
    for(var j= 0 ; j < 4 ;j++)
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
}



