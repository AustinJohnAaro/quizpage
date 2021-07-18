console.log ("quizpage.js")


 window.addEventListener('load', yourFunction, false);
 // ..... or 
 window.addEventListener('DOMContentLoaded', yourFunction, false);
 
 

const form = document.getElementById('');
const log = document.getElementById('');
submitBtn.addEventListener('submit', logSubmit);
window.onload = function(){
  (function(){
    var counter = 5;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  })();
  }
  var timer = document.getElementById("mytime");
  var counter = setInterval(function(){
    countdown()}, 1000);
  //user clicks the 'start' button and timer starts counting down
  
  function countdown(minutes, seconds){ 
    timer.value = "17:30:00"; //default value
    document.getElementById("btn").innterHTML = counter;
    counter--;
  };
  
  
  var click = document.getElementById("btn");
  btn.addEventListener("click", countdown); //"click" as DOM Object?
  btn.addEventListener("click", stopcounting);
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
  window.onload = function(){
    (function(){
      var counter = 5;
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('sorry, out of time');
            clearInterval(counter);
        }
      }, 1000);
    })();
    }
}
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;




  


// var quizBody = document.getElementById("quiz");
// var resultsEl = document.getElementById("result");
// var finalScoreEl = document.getElementById("finalScore");
// var gameoverDiv = document.getElementById("gameover");
// var questionsEl = document.getElementById("questions");
// var quizTimer = document.getElementById("timer");
// var startQuizButton = document.getElementById("startbtn");
// var startQuizDiv = document.getElementById("startpage");
// var highscoreContainer = document.getElementById("highscoreContainer");
// var highscoreDiv = document.getElementById("high-scorePage");
// var highscoreInputName = document.getElementById("initials");
// var highscoreDisplayName = document.getElementById("highscore-initials");
// var endGameBtns = document.getElementById("endGameBtns");
// var submitScoreBtn = document.getElementById("submitScore");
// var highscoreDisplayScore = document.getElementById("highscore-score");
// var buttonA = document.getElementById("a");
// var buttonB = document.getElementById("b");
// var buttonC = document.getElementById("c");
// var buttonD = document.getElementById("d");
// const


// var finalQuestionIndex = quizQuestions.length;
// var currentQuestionIndex = 0;
// var timeLeft = 76;
// var timerInterval;
// var score = 0;
// var correct;


// function generateQuizQuestion(){
//     gameoverDiv.style.display = "none";
//     if (currentQuestionIndex === finalQuestionIndex){
//         return showScore();
//     };


//     function startQuiz(){
//         gameoverDiv.style.display = "none";
//         startQuizDiv.style.display = "none";
//         generateQuizQuestion();
    
//         //Timer
//         timerInterval = setInterval(function() {
//             timeLeft--;
//             quizTimer.textContent = "Time left: " + timeLeft;
//             if(timeLeft === 0) {
//               clearInterval(timerInterval);
//               showScore();
//             }
// }, 1000);
// quizBody.style.display = "block";
// }
// }

// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');
// var startBtn = document.getElementById('start');

// var message =
//   'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
// var words = message.split(' ');

// // Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function() {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
//   var msgInterval = setInterval(function() {
//     if (words[wordCount] === undefined) {
//       clearInterval(msgInterval);
//     } else {
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 300);
// }

// startBtn.onclick = countdown;

// alert("HereIsMyQuizProject")
// var generateBtn = document.querySelector('startQuiz')
// function writePassword() {
//   generatePassword()
// }generateBtn.addEventListener("click", () => {
//   var userInput = prompt("Type a number between 8 - 128");
//   console.log(userInput)
//   if( 8 > userInput || 128 < userInput ) {
//     alert("the range you selected is not valid") 
//   }else if (isNaN(userInput) ) {
//      alert("please select a different number") 
//   }
//    else {
//       var newPassword = '';
//       var emptyString = ''; 
//       var lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numeric = '1234567890';
//     const special = '/!@#$%^&*()';
//     const lower = confirm("Do you want a Lowercase Character in your Password?")
//     const upper = confirm("Do you want a Uppercase Character in your Password?")
//     const numerics = confirm("Do you want any numeric Characters in your Password?")
//     const speci = confirm('Do you want any special Characters in your Password?')
//     if(lower + upper + numerics + speci === 0 )
//     return
//     if(lower) {
//       emptyString += lowercase 
//       newPassword +=lowercase[0] 
//     }
//     if(upper) {
//       emptyString += uppercase
//       newPassword +=uppercase[0]       
//     }
//     if(numerics) {
//       emptyString += numerics
//       newPassword +=numerics[0] 
//     }
//     if(speci) {
//       emptyString += special
//       newPassword +=special[0] 
//     }
//     for ( var i = 0; i < userInput; i++ ) {
//       var randomNum = Math.floor(Math.random() * emptyString.length);  
//       newPassword +=emptyString[randomNum];
//       newPassword +=lowercase[0];
//       newPassword +=uppercase[0];
//       newPassword +=numerics[0];
//       newPassword +=special[0];
// }
//     var showPassword = document.querySelector("#password");
//     showPassword.value = newPassword; 
//     newPassword +=emptyString[randomNum];
//       newPassword +=lowercase[0];
//       newPassword +=uppercase[0];
//       newPassword +=numerics[0];
//       newPassword +=special[0];
// }
// });
// // var generateBtn = document.querySelector("#generate");
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// generateBtn.addEventListener("click", writePassword);


