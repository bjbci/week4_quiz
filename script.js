





var Question1={
    q:"You can include JavaScript on an HTML page if it is written between:",

    correctAnswer:"Script tags",
    incorrectAnswer1:"Two pieces of rye bread",
    incorrectAnswer2:"Commercial breaks",
    incorrectAnswer3:"The lines",
}
var Question2={ 
    q: "A boolean is what kind of data type? ",
    correctAnswer:"Primitive",
    incorrectAnswer1:"Primary",
    incorrectAnswer2:"Prim and proper",
    incorrectAnswer3:"Primavera",
}   
var Question3={ 
q: "An oject is a data type that is a collection of: ",

correctAnswer:"Properties",
incorrectAnswer1:"Railroads",
incorrectAnswer2:"Utilities",
incorrecAanswer3:"",
}
var Question4={
q: "Use this type of operator to determine if a number is odd or even: ",

correctAnswer:"modulus",
incorrectAnswer1:"smooth",
incorrectAnswer2:"telephone",
incorrectAnswer3:"surgeon",
}
var Question5={ 
q: "Use this method to determine the length of an array: ",
correctAnswer:".length",
incorrectAnswer1:".yardstick",
incorrectAnswer2:".your arm",
incorrectAnswer3:".make an educated guess",
}
var Question6={ 
q: "What captues a chunk of code to be reused in a program?",
correctAnswer:"function",
incorrectAnswer1:"butterfly net",
incorrectAnswer2:"federal marshall",
incorrectAnswer3:"screen shot",
}
var Question7={ 
q: "When writing an object, be careful not to forget the:",
correctAnswer:"commas",
incorrectAnswer1:"tickets",
incorrectAnswer2:"keys",
incorrectAnswer3:"to lock the door",
}
var Question8={ 
q: "Which is the highest level of an objet? ",
correctAnswer:"window",
incorrectAnswer1:"penthouse",
incorrectAnswer2:"CEO",
incorrectAnswer3:"stratosphere",
}
var Question9={ 
q: "An API is what? ",
correctAnswer:"Aplication Programming Interface",
incorrectAnswer1:"Any Possible Idea",
incorrectAnswer2:"All Purple Igloos",
incorrectAnswer3:"Artfully Placed Item",
}
var Question10={ 
q: "Week 4 homework is: ",
correctAnswer:"A Valuable learning experience",
incorrectAnswer1:"An exercise in futility",
incorrectAnswer2:"Gonna be a couple days late",
incorrectAnswer3:"A lot of redundant code",
}

var questionObjects=[Question1,Question2,Question3,Question4,Question5,Question6,Question7,Question8,Question9,Question10]
for( var i=0; i<10; i++)



console.log(questionObjects[i])

// if(correct-answer){
//     Correct! 1 point!
//     }else{
//     Sorry, WahWah!
//     }
var newCount
 var count=5
 const counter= document.getElementById("counterseconds")
 console.log(counter)
 var h2 = document.createElement('h2')
 h2.innerText=newCount
 
 counter.appendChild(h2)
 console.log(newCount)

i=setInterval(function(){
    console.log("interval running",count)
    h2.textContent=count
    newCount=count--

    if (newCount===0){
clearInterval(i)
    }
},1000)
if (newCount===0)

clearInterval(setInterval)










    
        


