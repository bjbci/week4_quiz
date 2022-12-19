var currentScore=0
var newCount
var count =0
var x
var y
let currentHighScore=0
var scoreCount=0
let playerSelect=["a","b","c","d"]
// var answerA
// var answerB
// var answerC
// var answerD

function init() {
  getHighScore();
}

function getHighScore(){
  var highScoreBox=document.getElementById("high-score-box")
  console.log(highScoreBox)
  var highScoreValue=document.createElement('h2')
var currentHighScore=localStorage.getItem("currentHighScore")
highScoreValue.innerText=currentHighScore
highScoreBox.appendChild(highScoreValue)
}


var btnStart = document.getElementById("btnStart").addEventListener('click',buttonStart)
function buttonStart(){
  console.log("button START pressed")
  startQuiz()
  startTimer()
  
}

function startQuiz() {
  isWin = false;
  timerCount > 0;
  // Prevents start button from being clicked when round is in progress
  runQuestions()
  
}
//btnStart.disabled = true;

var timerCount=20
var timerEl=document.getElementById("counterseconds")
var newCountDisplay=document.createElement('h3')
function startTimer() {
  
  // Sets timer
  let timer = setInterval(function() {
    
    timerEl.innerText = timerCount;
    console.log("countdown running")
    if (timerCount === 0) {
      clearInterval(timer)
      timerEl.innerText = 'times up!'
    }
    timerCount--;
  } ,1000)
}
// var btnA=document.getElementById("btnA")
// btnA.addEventListener('click'),function(){
  //          CODE BLOCK
  //} 
  //var btnA = document.getElementById("btnA").addEventListener('click',function(){
    //             CODE BLOCK
    //})
    var btnA = document.getElementById("btnA",buttonA)//.addEventListener('click',buttonA)
    function buttonA(){
      console.log("button A pressed")
    }

    
    var btnB = document.getElementById('btnB',buttonB)//.addEventListener('click',buttonB)
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
        optionC:"Angry Pink Iguanas",
        optionD:"A Perplexing Issue",
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
     // for (let i=0;i<objectQuestions.length;i++){
       //   var obj=objectQuestions[i]
       
       let index=0
       let currentQuestion=objectQuestions[index]
       console.log(currentQuestion)
       
       var ques1TextParent=document.getElementById("question-box")//parent Element
       var h2=document.createElement('h2')//child element Created
       
       // console.log(ques1TextParent)
       // console.log(h2)
       h2.innerText=currentQuestion.question//use a variable
       console.log(h2.innerText)
       ques1TextParent.append(h2)
       
       ////////////////////////////////////
       var btnAParent=document.getElementById('btnA')
       var h3A=document.createElement('h3')
       console.log(currentQuestion.optionA)
       h3A.innerText=currentQuestion.optionA
       btnAParent.appendChild(h3A)//.addEventListener('click',buttonA)
       console.log(h3A)
       
       var btnBParent=document.getElementById('btnB')
       var h3B=document.createElement('h3')
       h3B.innerText=currentQuestion.optionB
       btnBParent.appendChild(h3B)
       console.log(h3B)
       
       var btnCParent=document.getElementById('btnC')
       var h3C=document.createElement('h3')
       h3C.innerText=currentQuestion.optionC
       btnCParent.appendChild(h3C)
       console.log(h3C)
       
       var btnDParent=document.getElementById('btnD')
       var btnD=document.createElement('h3')
       btnD.innerText=currentQuestion.optionD
       btnDParent.appendChild(btnD)
       console.log(btnD) 
       
       result= currentQuestion.correct
       return result
       
       compareAnswers()
      }
      function compareAnswers(result){
        if(playerSelect===currentQuestion.correct){
          console.log(currentQuestion.correct)
          
        }
        
        localStorage.setItem('currentHighScore',currentHighScore)
}


  //////////////////////////////////////////////////////////////////
  // Arrays used to create blanks and letters on screen
  var correctAnswers = [];
  let playerAnswer
  
  // Array of words the user will guess
  var options= ["A","B", "C", "D",];
  

  localStorage.setItem('currentHighScore',currentHighScore)
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
  


if(playerAnswer===objectQuestions.correct){
scoreCount++
 playerAnswer
}else{
  alert('incorrect Answer, no points given')
}

init()






