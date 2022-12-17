console.log(document.body.children)
var highScore=0
var newCount
var count =0
var x
var y
var scoreCount=0
var timerCount=20
var answerA = "this isanswer a"
var answerB
var answerC
var answerD




var scoreContainer


var btnStart = document.getElementById("btnStart").addEventListener('click',buttonStart)
function buttonStart(){
console.log("button START pressed")
startQuiz()
startTimer(

)
}
 
var btnA = document.getElementById("btnA").addEventListener('click',buttonA)
function buttonA(){
  console.log("button A pressed")
}


var btnB = document.getElementById('btnB').addEventListener('click',buttonB)
function buttonB(){
console.log("button B pressed")
}



var btnC = document.getElementById('click',buttonC)//.addEventListener('click',buttonC)
function buttonC(){
console.log("button C pressed")
}


var btnD = document.getElementById('click',buttonD)//.addEventListener('click',buttonD)
function buttonD(){
console.log("button D pressed")
}


document.getElementById('click',buttonReStart)//.addEventListener('click',btnReStart)
function buttonReStart(){
console.log("button RESTART pressed")
}


document.getElementById('click',buttonSubmit)//.addEventListener('click',buttonSubmit)
function buttonSubmit(){
console.log("button SUBMIT pressed")
}


document.getElementById('click',buttonClearScreen)//.addEventListener('click',buttonClearScreen)
function buttonClearScreen(){
console.log("button CLEAR SCREEN pressed")
}

///////////////////////////////////////////
// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startQuiz() {
  isWin = false;
  timerCount > 0;
  // Prevents start button from being clicked when round is in progress
  //btnStart.disabled = true;
  runQuestions()
  startTimer()
}

    








var timerEl=document.getElementById("counterseconds")
console.log(timerEl)

var newCountDisplay=document.createElement('h3')
newCountDisplay.innerText= timerCount
console.log(newCountDisplay)
//newCountDisplay.innerText= timerCount
//The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  const timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    console.log("countdown running")
    if (timerCount === 0) {
      clearInterval(timer)
    }// Tests if win condition is met
    //if (isWin && timerCount ===12 ) {
      // Clears interval and stops timer
      //clearInterval(timer);
      // winGame()
    } ,1000)
    //clearInterval(timer)
    
    //clearInterval(timer)
  }
  //////////////////////////////////////////////////////////////////
  // Arrays used to create blanks and letters on screen
  var correctAnswers = [];
  
  
  // Array of words the user will guess
  var options= ["A","B", "C", "D",];
  
  // The init function is called when the page loads 
  function init() {
    getWins();
    getlosses();
  }
  
  // The startGame function is called when the start button is clicked
  function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }
  
  // The winGame function is called when the win condition is met
  function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  
  // // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  // function startTimer() {
    //   // Sets timer
    //   timer = setInterval(function() {
      //     timerCount--;
      //     timerElement.textContent = timerCount;
      //     if (timerCount >= 0) {
        //       // Tests if win condition is met
        //       if (isWin && timerCount > 0) {
          //         // Clears interval and stops timer
          //         clearInterval(timer);
          //         winGame();
          //       }
          //     }
          //     // Tests if time has run out
          //     if (timerCount === 0) {
            //       // Clears interval
            //       clearInterval(timer);
    //       loseGame();
    //     }
    //   }, 1000);
    // }
    
    
    
    
    //////////////////////////////////////////////////////////
    
    
    
    
    
    
    
    
    
    
    let objectQuestions=[
      {
        question:"You can include JavaScript on an HTML page if it is written between:",
        
        optionA: "Script tags",
        optionB:"Two pieces of rye bread",
        optionC:"Commercial breaks",
        optionD:"The lines",
        correct:"A"
      },
      {
        question: "A boolean is what kind of data type? ",
        
        optionA:"Primavera",
        optionB:"Primary",
        optionC:"Prim and proper",
        optionD:"Primative",
        correct:"D"
      } ,  
      {
        question: "An oject is a data type that is a collection of: ",
        
        optionA:"Properties",
        optionB:"Railroads",
        optionC:"Utilities",
        optionD:"Hotels",
        correct:"A"
      },
      {
        question:"Use this type of operator to determine if a number is odd or even: ",
        
        optionA:"modulus",
        optionB:"smooth",
        optionC:"telephone",
        optionD:"surgeon",
        correct:"A"
      },
      {
        question:"Use this method to determine the length of an array: ",
        
        optionA:".length",
        optionB :".yardstick",
        optionC:".your arm",
        optionD:".make an educated guess",
        correct:"A"
      },
      {
        question: "What captues a chunk of code to be reused in a program?",
        
        optionA:"federal marshall",
        optionB:"butterfly net",
        optionC:"function",
        optionD:"screen shot",
        correct:"C"
      },
      {
        question: "When writing an object, be careful not to forget the:",
        
        optionA:"commas",
        optionB:"tickets",
        optionC:"keys",
        optionD:"to lock the door",
        correct:"A"
      },
      {
        question: "Which is the highest level of an objet? ",
        
        optionA:"peak",
        optionB:"penthouse",
        optionC:"CEO",
        optionD:"window",
        correct:"D"
      },
      {
        question: "An API is what? ",
        
        optionA:"Aplication Programming Interface",
        optionB:"Any Possible Idea",
        optionC:"All Purple Igloos",
        optionD:"Artfully Placed Item",
        correct:"A"
      },
      {
        question: "Week 4 homework is: ",
        
        optionA:"Gonna be 64 days late",
        optionB:"An exercise in futility",
        optionC:"A valuable learning experience",
        optionD:"A lot of redundant code",
        correct:"C"
      },
]
function runQuestions(){
  console.log(objectQuestions[0])
  for (let i=0;i<objectQuestions.length;i++){
  
    var ques1TextParent=document.getElementById("question-box")//parent Element
    var h2=document.createElement('h2')//child element Created
    
    console.log(ques1TextParent)
    console.log(h2)
    h2.innerText=objectQuestions[i].question//use a variable
    console.log(h2.innerText)
    ques1TextParent.appendChild(h2)
    
    
    
    // var btnAEl=document.getElementById("btnA")//parent element
    var btnParent=document.getElementById('answers')
    console.log(btnParent)
    
    var btnA=document.createElement('button')
    btnA.innerText=objectQuestions[i].optionA

    console.log(btnA.text)
    btnParent.appendChild(btnA)
    console.log(btnA)
    
    
    // var btnBParent=document.getElementById('answers')
    console.log(btnParent)
    var btnB=document.createElement('button')
    btnB.innerTextext=objectQuestions[i].optionB
    console.log(btnB.text)

    btnParent.appendChild(btnB)
    console.log(btnB)


    // var btnCParent=document.getElementById('answers')
    console.log(btnParent)
    var btnC=document.createElement('button')
    btnC.innerText=objectQuestions[i].optionC
    console.log(btnC.text)

    btnParent.appendChild(btnC)
    console.log(btnC)

    // var btnDParent=document.getElementById('answers')
    console.log(btnParent)
    var btnD=document.createElement('button')
    btnD.innerText=objectQuestions[i].optionD
    console.log(btnD.text)

    btnParent.appendChild(btnD)
    console.log(btnD)
    
   
    
  }
}

// btnStart.addEventListener('click', startQuiz)  //add event listener AND calls startQuiz()



// for(var i=0; i< objectQuestions.length; i++)
// console.log(objectQuestions[i])
// })

// function runQuestion(){
//     const questionbox =document.getElementById("question-box")
// var h2=document.createElement('h2')
// console.log(questionbox)
// h2.innerText=objectQuestions[i]

//     //objectQuestions.innerHTML= "<p>"+q.question+"<p";

    

//     const buttonA =document.getElementById("button-a")

//     var h3=document.createElement('h3')
//      console.log(buttonA)
//     h3.innerText=objectQuestions[i]

//     optionB.innerHTML = q.choiceB;

//     const buttonB =document.getElementById("h3")
//     var h3=document.createElement('h3')
//     console.log(buttonB)
//     h3.innerText=objectQuestions[i]
   

//     optionC.innerHTML = q.choiceC;
//     const buttonC =document.getElementById("button-c")
//     var h3=document.createElement('h3')
//     console.log(buttonC)
//     h3.innerText=objectQuestions[i]
   

//     optionD.innerHTML = q.choiceD;
//     const buttonD =document.getElementById("button-d")
//  var h3=document.createElement('h3')
//  console.log(buttonD)
//  h3.innerText=objectQuestions[i]
// }
// start.style.display="none";
// //runningQuestion=0
// runQuestion()
// quiz.style.display="block";
// runQuestion++



// let score=0
// function checkAnswer(){
//     if(questions[runningQuestion].correct==answer){
//         score++
//         answerIsCorrect()      //107
//         }else{
//             answerIsIncorrect()
//         }
//         count=0  
//       if (runningQuestion < lastQuestion){
//             runningQuestion++
//              renderQuestion();
//              }else{
//              clearInterval(i)
//              scoreRender();
// //             }
// // }
// answerIsCorrect()


//  document.getElementById("start")
// start.addEventListener("click",startQuiz)


// let timer;

// function startQuiz(){
    
//     counterRender();
    
   
// }
// if(y=="one"){
//     x=1
// }else{
//     x==0
// }
//     if (y=="one"){
//         x=1
//     }else if (y=="zero"){
//         x=0
//     }else{
//         x=2
//     }
// function showScore(){
   
//     //try: scoreDiv
//     const scoreCont =document.getElementById("scoreContainer")
//     var h2=document.createElement('h2')
//     console.log(h3)
//     h2.innerText=score
// }
  
//  function startTest(){     //RUNS THE GAME TIMER
//     var newCount
//     var count=10 
//  const counter= document.getElementById("counterseconds")
//  console.log(counter)
//  var h2 = document.createElement('h2')
//  h2.innerText=newCount
 
//  counter.appendChild(h2)
 

// i=setInterval(function(){
//     console.log("interval running",count)
//     h2.textContent=count
//     newCount=count--
//     console.log(newCount)
//     if (newCount===0){                //    DO
    
//     clearInterval(i)                  //    NOT
//     }                                 //
// },1000)                               //    CHANGE
// if (newCount===0)
//                      //THIS- it doesnt work any other way or wait till the e  tomess ////with 
// clearInterval(i)                      //
//  }
             
 

