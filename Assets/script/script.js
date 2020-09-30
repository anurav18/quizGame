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

//variable declaration

var startBtnEl = document.getElementById("start-quiz");
var quizDescEl = document.querySelector(".quiz-description");
var quizDuration = 45;
var quizOptEl = document.querySelector(".quiz-options");
var quizQueEl = document.querySelector(".quiz-question");
var timeDisplay = document.querySelector('#time');
var optionsBtnEl = document.querySelector(".options-class");
var Result = 0;
var sec = 60;

//Start the timer and Evaluate the response
var invoke = function() {
    
    function startTimer(){
        
        var timer = setInterval(function(){
            sec--;
            document.getElementById('time').innerHTML='00:'+sec;
            if (sec < 0 || questions.length > 6) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }

    quizOptEl.addEventListener("click",function(event){
       event.preventDefault();
       var ind = event.target.getAttribute('index-value');
       //correct Answer
   if(event.target.textContent === questions[ind].answer)
   {
     incResult();
     count = ++ind;
     event.target.style.background = "green"; 
     setTimeout('setOptions(count)',400);
   }
   //Incorrect Answer
   else
   {
   count = ++ind; 
   event.target.style.background = "red"; 
   setTimeout('setOptions(count)',400); 
   sec -= 5;
   document.getElementById('time').innerHTML='00:'+sec;
   }
});
    startTimer();
    return
};


//Increase the Score when the correct answer is clicked

function incResult(){
    Result++;
}

//Start Quiz 
startBtnEl.addEventListener("click", function(){
    quizDescEl.remove();
    startBtnEl.remove();
    // startTimer(quizDuration,0); 
    setOptions(0);
    invoke();
});

function setOptions(i){
   
    while(quizOptEl.firstChild)
    {
      quizOptEl.removeChild(quizOptEl.firstChild);
     
    }
    if(i < questions.length)
    {
    quizQueEl.textContent = questions[i].question;
    for(var j= 0 ; j < 4 ;j++)
        {
            var btnEl = document.createElement("button");
            btnEl.textContent = questions[i].options[j];
            btnEl.setAttribute("index-value",i);
            btnEl.setAttribute("id",j);
            btnEl.setAttribute("class","quiz-options");
             btnEl.setAttribute("style","background:rgb(80, 0, 80)");
            quizOptEl.appendChild(btnEl);
        }
     }
     else
     {
         endGame(); 
     }
}

//End the Game
let userData = JSON.parse(localStorage.getItem("userData")) || [];
function endGame(){
   quizQueEl.innerHTML = "The Quiz has been successfully completed! </br> <strong>Your Score: "+Result+"</strong><br> Please enter your initials below to register your score";
   document.querySelector(".navbar-text").style.display = "none";
   console.log(sec);
    while(quizOptEl.firstChild)
    {
      quizOptEl.removeChild(quizOptEl.firstChild);
    }
        var inputEl = document.createElement("input");
        var breakEl = document.createElement("br");
        var submitInitialsEl = document.createElement("button");
        submitInitialsEl.textContent = "Submit Score";
        submitInitialsEl.setAttribute("class","btn btn-dark");
        quizQueEl.appendChild(breakEl);
        quizQueEl.appendChild(inputEl);
        quizQueEl.appendChild(submitInitialsEl);
        
        submitInitialsEl.addEventListener("click",function(){
            userData.push({name: inputEl.value, score: Result});
            localStorage.setItem("userData", JSON.stringify(userData));
            location.href = "./HighestScores.html";
        });
}

