
//const ptimer= document.createElement('p')         // ptimer is created as p element
//const ptimerBox= document.querySelector("#timer-box") //timer-box assigned as ptimerBox  
//console.log(ptimerBox)
//ptimer.append(ptimerBox)
//console.log(ptimer)

var newCount



 var count=50
 const counter= document.getElementById("counterseconds")
 console.log(counter)
 var h2 = document.createElement('h2')
 h2.innerText=newCount
 console.log(count)
 counter.appendChild(h2)
 console.log(newCount)

setInterval(function(){
    console.log("interval running",count)
    h2.textContent=count
    count--
},1000)


 var setIntervalId = setInterval(function(){
   
   countTimer.textContent=newCount
    //console.log(count)     //------  this shows the countdown from 20
    count--; 

    newCount=count
    if (newCount===0){
    clearInterval(setIntervalId)
    }
    },1000)

    clearInterval(setIntervalId)



    
        


