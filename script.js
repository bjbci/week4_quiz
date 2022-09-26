// const start= document.getElementById('start')
// start.addEventListener('click')


const scoreContainer= document.getElementById("scoreContainer")
var x
var y
var count

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

optionA:"Gonna be a couple days late",
optionB:"An exercise in futility",
optionC:"A valuable learning experience",
optionD:"A lot of redundant code",
correct:"C"
},
]
for(var i=0; i< objectQuestions.length; i++)
console.log(objectQuestions[i])


function runQuestion(){
    const questionbox =document.getElementById("question-box")
var h2=document.createElement('h2')
console.log(questionbox)
h2.innerText=objectQuestions[i]

    //objectQuestions.innerHTML= "<p>"+q.question+"<p";

    

    const buttonA =document.getElementById("button-a")

    var h3=document.createElement('h3')
     console.log(buttonA)
    h3.innerText=objectQuestions[i]

    optionB.innerHTML = q.choiceB;

    const buttonB =document.getElementById("h3")
    var h3=document.createElement('h3')
    console.log(buttonB)
    h3.innerText=objectQuestions[i]
   

    optionC.innerHTML = q.choiceC;
    const buttonC =document.getElementById("button-c")
    var h3=document.createElement('h3')
    console.log(buttonC)
    h3.innerText=objectQuestions[i]
   

    optionD.innerHTML = q.choiceD;
    const buttonD =document.getElementById("button-d")
 var h3=document.createElement('h3')
 console.log(buttonD)
 h3.innerText=objectQuestions[i]
}
start.style.display="none";
//runningQuestion=0
runQuestion()
quiz.style.display="block";
runQuestion++



let score=0
function checkAnswer(){
    if(questions[runningQuestion].correct==answer){
        score++
        answerIsCorrect()      //107
        }else{
            answerIsIncorrect()
        }
        count=0  
      if (runningQuestion < lastQuestion){
            runningQuestion++
             renderQuestion();
             }else{
             clearInterval(i)
             scoreRender();
//             }
// }
answerIsCorrect()


 document.getElementById("start")
start.addEventListener("click",startQuiz)


let timer;

function startQuiz(){
    
    counterRender();
    
   
}
if(y=="one"){
    x=1
}else{
    x==0
}
    if (y=="one"){
        x=1
    }else if (y=="zero"){
        x=0
    }else{
        x=2
    }
function showScore(){
   git add -A;
    //try: scoreDiv
    const scoreCont =document.getElementById("scoreContainer")
    var h2=document.createElement('h2')
    console.log(h3)
    h2.innerText=score
}
  
 function startTest(){     //RUNS THE GAME TIMER
    var newCount
    var count=10 
 const counter= document.getElementById("counterseconds")
 console.log(counter)
 var h2 = document.createElement('h2')
 h2.innerText=newCount
 
 counter.appendChild(h2)
 

i=setInterval(function(){
    console.log("interval running",count)
    h2.textContent=count
    newCount=count--
    console.log(newCount)
    if (newCount===0){                //    DO
    
    clearInterval(i)                  //    NOT
    }                                 //
},1000)                               //    CHANGE
if (newCount===0)
                     //THIS- it doesnt work any other way or wait till the e  tomess ////with 
clearInterval(i)                      //
 }
             }}
 
 








    
   
