const restartBtn= document.getElementById('restart')
const submitBtn= document.getElementById('submit')
const buttonA= document.getElementById('true')
const buttonB= document.getElementById('false')
const buttonC= document.getElementById('false')
const buttonD= document.getElementById('false')
const highScoreBtn= document.getElementById(high-score)
const questionText= document.getElementById('question-text')


var newCount
 var count=5

 function counter(){
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
    if (newCount===0){
clearInterval(i)
    }
},1000)
if (newCount===0)

clearInterval(setInterval)
 }

//  var score=0
//  //counter()
// //  function questions(){
// // var score=0
// let questionObjects=[
// {
// : "You can include JavaScript on an HTML page if it is written between:\n(a)Script tags\n(b)Two pieces of rye bread\n(c)Commercial break\n(d)The lines",

// answer:"a"
// },
//    {
//     prompt: "A boolean is what kind of data type?\n(a)Primitive\n(b)Primary\n(c)Prim and proper\n(d)Primavera ",
    
//     answer:"a"
// },
//    {
//     prompt: "An oject is a data type that is a collection of\n(a)Properties\n(b)Railroads\n(c)Utilities\n(d)Hotels: ",
// answer:"a"
// },
// {
//     prompt: "Use this type of operator to determine if a number is odd or even:\n(a)modulus\n(b)smooth\n(c)telephone\n(d)surgeon ",

// answer:"a"
// },
// {
//     prompt: "Use this method to determine the length of an array:\n(a).length\n(b).yardstick\n(c).your arm\n(d).make an educated guess ",

// answer:"a"
// },
// {
//     prompt: "What captues a chunk of code to be reused in a program?\n(a)function\n(b)butterfly net\n(c)federal marshall\n(d)screen shot",

// answer:"a"
// },
// {
// prompt: "When writing an object, be careful not to forget the:\n(a)commas\n(b)tickets\n(c)keys\n(d)to lock the door",

// answer:"a"
// },
//  {
//     prompt: "Which is the highest level of an objet?\n(a)window\n(b)penthouse\n(c)CEO\n(d)stratosphere ",

// answer:"a"
// },
// {
//     prompt: "An API is what?\n(a)Aplication Programming Interface\n(b)Any Possible Idea\n(c)All Purple Igloos\n(d)Artfully Placed Item ",

// answer:"a"
// },
// {
// prompt: "Week 4 homework is:\n(a)A Valuable learning experience\n(b)An exercise in futility\n(c)Gonna be a couple days late\n(d)A lot of redundant code ",

// answer:"a"
// },
// ]



// for( var i=0; i<questionObjects.length; i++){
// response=window.prompt(questionObjects[i].prompt)
// console.log(response)


// if(response == questionObjects[i].answer){
//     score++
//     alert("Correct!")
// }else{
//     alert("wrong! WahWah")
// }
// }
// alert("Questions Correct "+score +",  Score  "+score*7)
//  }

//if(questionObjects[i]){);
//counter()
//questions()





let objectQuestions=[
    {
        question:"You can include JavaScript on an HTML page if it is written between:",
    
        correctAnswer:"Script tags",
        incorrectAnswer1:"Two pieces of rye bread",
        incorrectAnswer2:"Commercial breaks",
        incorrectAnswer3:"The lines",
    
        
    }
    
    console.log(Object.values(Question1))
    
   // function question2(){
    var Question2={ 
        q: "A boolean is what kind of data type? ",
        correctAnswer:"Primitive",
        incorrectAnswer1:"Primary",
        incorrectAnswer2:"Prim and proper",
        incorrectAnswer3:"Primavera",
    }   
    console.log(Object.keys(Question2))
    
    
  //  function question3(){
    var Question3={
    q: "An oject is a data type that is a collection of: ",
    
    correctAnswer:"Properties",
    incorrectAnswer1:"Railroads",
    incorrectAnswer2:"Utilities",
    incorrecAanswer3:"Hotels",
    }
    // console.log(Object.keys(Question3))
    // const {q} = Question3
    // const {correctAnswer} = Question3
    // const {incorrectAnswer1} = Question3
    // const {incorrectAnswer2} = Question3
    // const {incorrectAnswer3} = Question3
    // console.log(q)
    // console.log(correctAnswer)
    // console.log(incorrectAnswer1)
    // console.log(incorrectAnswer2)
    // console.log(incorrectAnswer3)
    
    
   // function question4(){
    var Question4={
    q: "Use this type of operator to determine if a number is odd or even: ",
    
    correctAnswer:"modulus",
    incorrectAnswer1:"smooth",
    incorrectAnswer2:"telephone",
    incorrectAnswer3:"surgeon",
    }
    
    console.log(Object.keys(Question4))
    const {q} = Question4
    const {correctAnswer} = Question4
    const {incorrectAnswer1} = Question4
    const {incorrectAnswer2} = Question4
    const {incorrectAnswer3} = Question4
    console.log(q)
    console.log(correctAnswer)
    console.log(incorrectAnswer1)
    console.log(incorrectAnswer2)
    console.log(incorrectAnswer3)
    const buttonText= document.getElementById("button-1")
     console.log(buttonText)
     var h3 = document.createElement('h3')
     h3.textContent="correctAnswer"
     
     buttonText.appendChild(h3)
    
   // function question5(){
    var Question5={ 
    q: "Use this method to determine the length of an array: ",
    correctAnswer:".length",
    incorrectAnswer1:".yardstick",
    incorrectAnswer2:".your arm",
    incorrectAnswer3:".make an educated guess",
    }
    console.log(Object.keys(Question5))
    
   // function question6(){
    var Question6={ 
    q: "What captues a chunk of code to be reused in a program?",
    correctAnswer:"function",
    incorrectAnswer1:"butterfly net",
    incorrectAnswer2:"federal marshall",
    incorrectAnswer3:"screen shot",
    }
    console.log(Object.keys(Question6))
    
  //  function question7(){
    var Question7={ 
    q: "When writing an object, be careful not to forget the:",
    correctAnswer:"commas",
    incorrectAnswer1:"tickets",
    incorrectAnswer2:"keys",
    incorrectAnswer3:"to lock the door",
    }
    console.log(Object.keys(Question7))
    
    //function question8(){
    var Question8={ 
    q: "Which is the highest level of an objet? ",
    correctAnswer:"window",
    incorrectAnswer1:"penthouse",
    incorrectAnswer2:"CEO",
    incorrectAnswer3:"stratosphere",
    }
    console.log(Object.keys(Question8))
    
   // function question9(){
    var Question9={ 
    q: "An API is what? ",
    correctAnswer:"Aplication Programming Interface",
    incorrectAnswer1:"Any Possible Idea",
    incorrectAnswer2:"All Purple Igloos",
    incorrectAnswer3:"Artfully Placed Item",
    }
    console.log(Object.keys(Question9))
    
   // function question10(){
    var Question10={ 
    q: "Week 4 homework is: ",
    correctAnswer:"A Valuable learning experience",
    incorrectAnswer1:"An exercise in futility",
    incorrectAnswer2:"Gonna be a couple days late",
    incorrectAnswer3:"A lot of redundant code",
    }
    console.log(Object.keys(Question10))
]
var questionObjects=[Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10]

for( var i=0; i<questionObjects.length; i++){
    response=window.prompt(questionObjects[i].prompt)
    console.log(response)
    
    
    if(response == questionObjects[i].answer){
        score++
        alert("Correct!")
    }else{
        alert("wrong! WahWah")
    }
    }
    alert("Questions Correct "+score +",  Score  "+score*7)
     

//for( var i=0; i<10; i++)

//if(questionObjects[i]){
//console.log(questionObjects[i])

//console.log(Object.values(i))


//console.log(questionObjects[i])

//askQuestions()



// if(correct-answer){
//     Correct! 1 point!
//     }else{
//     Sorry, WahWah!
//     }
// var newCount
//  var count=5
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
//     if (newCount===0){
// clearInterval(i)
//     }
// },1000)
// if (newCount===0)

// clearInterval(setInterval)










    
        

