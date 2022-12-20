var currentScore=0
var newCount
var count =0
let currentHighScore=0
let highScoreInitials='BJB'
var scoreCount=0
let currentQuestion
let buttonPressed
let buttonA 
let buttonB
let buttonC 
let buttonD 
let btnStartParent=document.querySelector('.btnStart')
var btnAParent=document.getElementById('A')
var btnBParent=document.getElementById('B')
var btnCParent=document.getElementById('C')
var btnDParent=document.getElementById('D')
var loadPage=document.getElementById('question-box')
var highScoreBox=document.getElementById("high-score-box")
var highScoreInitialsBox=document.getElementById("initialsForm")
let btnReStartParent=document.getElementById('btnReStart')
let btnSubmitParent=document.getElementById('btnSubmit')
let btnClrScrParent=document.getElementById('btnClrScr')
var loadPage=document.getElementById('question-box')
console.log(btnReStartParent,btnClrScrParent,btnSubmitParent)
var h2Load=document.createElement('h2')



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
    optionB:".yardstick",
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

// function myFunction() {
  //   var x = document.getElementById("myDIV");
  //   if (x.innerHTML === "Hello") {
    //     x.innerHTML = "Swapped text!";
    //   } else {
      //     x.innerHTML = "Hello";
      //   }
      // }
      function init() {
        loadStartPage()
      }
      
      function loadStartPage (){
        getHighScore()
        getHighScoreInitials()
        
        btnAParent.style.display = "none"
        btnBParent.style.display = "none"
        btnCParent.style.display = "none"
        btnDParent.style.display = "none"
        
        h2Load.innerText="THIS IS A TIMED 10 QUESTION QUIZ \nYOU HAVE 2 MINUTES TO COMLETE THIS QUIZ"
        console.log()
        loadPage.appendChild(h2Load)  //addEventListener('click',buttonA).
        btnStartParent.addEventListener('click',function(event){
          console.log(event)
          startQuiz()
        })//buttonStart
      }
      
      
      // function buttonStart(){
        
        //   console.log("button START pressed")
//   console.log(h2Load)
  
//   h2Load=""
//   console.log()
  
//   console.log()
//   console.log()
//   loadPage.appendChild(h2Load) 
// }

function getHighScore(){
  
  var highScoreValue=document.createElement('h2')
  var currentHighScore=localStorage.getItem("currentHighScore")
  highScoreValue.innerText=currentHighScore
  highScoreBox.append(highScoreValue)
  
  console.log(highScoreInitialsBox)
  var highScoreInitialsValue=document.createElement('h2')
  var currentHighScoreInitialsValue=localStorage.getItem("highScoreInitials")
  highScoreInitialsValue.innerText=currentHighScoreInitialsValue
  highScoreInitialsBox.append(highScoreInitialsValue)
}

function getHighScoreInitials(){
  
}

function startQuiz() {
  startTimer()
   h2Load.innerText=""
  // console.log(loadPage)
  
  // var loadPage=document.getElementById('question-box')
  // var h2Load=document.createElement('h2')
  // console.log(loadPage)
  
  // console.log()
  // loadPage.appendChild(h2Load) 
  
  isWin = false;
  timerCount > 0;
  // Prevents start button from being clicked when round is in progress
  btnAParent.style.display = "block"
  btnBParent.style.display = "block"
  btnCParent.style.display = "block"
  btnDParent.style.display = "block"
  btnReStartParent.style.display ="none"
  btnSubmitParent.style.display ="none"
  btnClrScrParent.style.display ="none"
  btnStartParent.style.display="none"
  runQuestions()
  
}
//btnStart.disabled = true;
var initialSubmit=document.querySelector('#initialsForm')
let initialsButton=document.querySelector('#submit-initials')
initialsButton.addEventListener('click',function(event){
  // event.preventDefault()
  
})
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

function runQuestions(){
  // for (let i=0; i<objectQuestions.length;i++){
    //  currentQuestion=objectQuestions[i]
    //  console.log(currentQuestion)
    // }
    
    let index=Math.floor(Math.random()*objectQuestions.length)
    currentQuestion=objectQuestions[index]
    console.log(currentQuestion)
    
    var quesTextParent=document.getElementById("question-box")//parent Element
    var h2=document.createElement('h2')//child element Created
    
    
      h2.innerText=currentQuestion.question//use a variable
      console.log(h2.innerText)
      quesTextParent.append(h2)

      console.log(currentQuestion.correct)
      
      ////////////////////////////////////
      var h3A=document.createElement('button')//'h3'
      h3A.addEventListener('click',buttonA)
      h3A.innerText=currentQuestion.optionA
      btnAParent.appendChild(h3A)  //addEventListener('click',buttonA).
      console.log(h3A)
      
      var h3B=document.createElement('button')//'h3'
      h3B.addEventListener('click',buttonB)
      h3B.innerText=currentQuestion.optionB
      btnBParent.appendChild(h3B)
      console.log(h3B)
      
      var h3C=document.createElement('button')//'h3'
      h3C.addEventListener('click',buttonC)
      h3C.innerText=currentQuestion.optionC
      btnCParent.appendChild(h3C)
      console.log(h3C)
      
      var h3D=document.createElement('button')//'h3'
      h3D.addEventListener('click',buttonD)
      h3D.innerText=currentQuestion.optionD
      btnDParent.appendChild(h3D)
      console.log(h3D) 

      selectAnswer()
}
      function selectAnswer(){

      if (buttonA){
        // console.log(event.path[0].id)
        // buttonPressed=event.path[0].id
        buttonPressed="A"
        console.log(buttonPressed)
        console.log("Button A pressed")
      }else if(buttonB){
        // console.log(event.path[0].id)
        // buttonPressed=event.path[0].id
        buttonPressed="B"
        console.log(buttonPressed)
        console.log("button B pressed")
      }else if(buttonC){
        // console.log(event.path[0].id)
        // buttonPressed=event.path[0].id
        buttonPressed="C"
        console.log(buttonPressed)
        console.log("button C pressed")
      }else {
        // console.log(event)
        // console.log(event.path[1].id)
        // buttonPressed=event.path[1].id
        buttonPressed="D"
        
        console.log(buttonPressed)
        console.log("button D pressed")

        return buttonPressed
      }
      compareAnswers()
    }
      // function buttonA(){
      //   // console.log(event.path[0].id)
      //   // buttonPressed=event.path[0].id
      //   buttonPressed="A"
      //   console.log(buttonPressed)
      //   console.log("Button A pressed")
      // }
      
      // function buttonB(){
      //   // console.log(event.path[0].id)
      //   // buttonPressed=event.path[0].id
      //   buttonPressed="B"
      //   console.log(buttonPressed)
      //   console.log("button B pressed")
      // }
      
      // function buttonC(){
      //   // console.log(event.path[0].id)
      //   // buttonPressed=event.path[0].id
      //   buttonPressed="C"
      //   console.log(buttonPressed)
      //   console.log("button C pressed")
      // }
      
      // function buttonD(){
      //   // console.log(event)
      //   // console.log(event.path[1].id)
      //   // buttonPressed=event.path[1].id
      //   buttonPressed="D"
        
      //   console.log(buttonPressed)
      //   console.log("button D pressed")
      // }
   
   
        
        function compareAnswers(buttonPressed){
          // console.log(currentQuestion.correct)
          
          if (buttonPressed!==currentQuestion.correct){
            console.log('CORRECT ANSWER!')
            currentScore +=10
          }else{
            console.log('INCORRECT ANSWER  WAH WAH!')
          }
          localStorage.setItem('currentHighScore',currentHighScore)
        }
        
        
        init()
  
  localStorage.setItem('currentHighScore',currentHighScore)
  localStorage.setItem('highScoreInitials',highScoreInitials)
  // The winGame function is called when the win condition is met
  function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = true;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  
  
  
  
  
  
  

  
  