function startTimer(duration, display) {
    var timer = duration;
    
  const interval =   setInterval(function () {
         var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        var minutes = minutes < 10 ? "0" + minutes : minutes;
        var seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        timer = timer - 1;
console.log(timer);
if(timer == -1)
{
    clearInterval(interval);
    alert("The quiz has been ended");
}
    }, 1000);
}

// window.onload = function () {
//     var quizDuration = 60 * 0.25,
//         timeDisplay = document.querySelector('#time');
//     startTimer(quizDuration, timeDisplay);
// };

var startBtnEl = document.getElementById("start-quiz");
var quizDescEl = document.querySelector(".quiz-description");
var quizDuration = 60 * 0.25,
timeDisplay = document.querySelector('#time');





startBtnEl.addEventListener("click", function(){

    quizDescEl.remove();
    startBtnEl.remove();
    startTimer(quizDuration, timeDisplay);
});

