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

var results = 0;
//Timer 
// function startTimer(duration,source) {
//    console.log("Start timer function");
//     var timer = duration;
    
//   const interval = setInterval(function () {
    
//          console.log("called set timer set Interval");
//         var seconds = parseInt(timer,10);
//         // var seconds = seconds < 10 ? "0" + seconds : seconds;
//         timeDisplay.textContent = seconds;
//         console.log(timeDisplay.textContent);
//         timer = timer - 1;
// if(timer == -1)
// {
//     endGame();
//     clearInterval(interval);
// }
//     }, 1000);
// }



var invoke = function() {
    var sec = 60;
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
   if(event.target.textContent === questions[ind].answer)
   {
     incResult();
     count = ++ind;
     event.target.style.background = "green"; 
     setTimeout('setOptions(count)',400);
   }
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

























var startBtnEl = document.getElementById("start-quiz");
var quizDescEl = document.querySelector(".quiz-description");
var quizDuration = 45;
var quizOptEl = document.querySelector(".quiz-options");
var quizQueEl = document.querySelector(".quiz-question");
var timeDisplay = document.querySelector('#time');
var optionsBtnEl = document.querySelector(".options-class");
var Result = 0;

//Evaluating the options selected and adding it to the Result count

// quizOptEl.addEventListener("click",function(event)
// {
// event.preventDefault();
// var ind = event.target.getAttribute('index-value');
// if(event.target.textContent === questions[ind].answer)
// {
//   incResult();
//   count = ++ind;
//   event.target.style.background = "green"; 
//  setTimeout('setOptions(count)',400);
 
// }
// else{
    

//    count = ++ind; 
//    event.target.style.background = "red"; 
//    setTimeout('setOptions(count)',400); 
// }
// });

//Increment the result
function incResult(){
    Result++;
}

//Start Quiz Trigger
startBtnEl.addEventListener("click", function(){
   
    quizDescEl.remove();
    startBtnEl.remove();
    // startTimer(quizDuration,0); 
    setOptions(0);
    invoke();

    
 
});


//D time interval
function setTimer() {
    
    //game timer
    var timerInterval = setInterval(function() {
      secondsLeft--;
      document.getElementById("seconds").textContent = `Time left ${secondsLeft}`;
      if(!secondsLeft) {
        clearInterval(timerInterval);
        endGame();
      }
  
    }, 1000);
  }

//setting Options and the Question Required

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
     else
     {
         endGame(); 
     }
}

//Function to end the game when the time is up

function endGame(){
    quizQueEl.innerHTML = "The Quiz has been successfully completed! </br> <strong>Your Score: "+Result+"</strong><br> Please enter your initials below to register your score";
   document.querySelector(".navbar-text").style.display = "none";
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
            var existingResult = localStorage.getItem("Highest score");
            
            if(existingResult < Result)
            {
            localStorage.setItem("Initials",inputEl.value);
            localStorage.setItem("Highest score",Result);
            }
            location.href = "./index.html";
        });
}



// (function() {
//     var sec = 60;
//     function startTimer(){
//         console.log('timer suppose to go')
//         var timer = setInterval(function(){
//             sec--;
//             document.getElementById('timerDisplay').innerHTML='00:'+sec;
//             if (sec < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
//     document.getElementById('incorrect').addEventListener('click', function() {
//         sec -= 5;
//         document.getElementById('timerDisplay').innerHTML='00:'+sec;
//     });
//     startTimer();
// })();