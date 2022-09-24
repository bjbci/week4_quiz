
console.log(document)



//setInterval(function(){ ("Times Up!");}, 2000)
//const countSeconds=120
var nextCount
var newCount
//var countDown=document.getElementsByTagName("h1")  //timer below button; establised parent variable
//console.log(countDown)
//var countTimer= document.createElement("p");
//countTimer.innerText=nextCount;
//document.header.appendChild(countTimer);
//var countDown=document.getElementsByTagName("h1")  //timer below button; establised parent variable
//console.log(countDown)

/* <p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script> */
const countTimer = document.createElement("p");
const node = document.createTextNode(newCount);
countTimer.appendChild(node);
const element = document.getElementById("timer-box");
element.appendChild(countTimer);

//countTimer.innerText=nextCount
//countTimer.appendChild.(p)
//console.log(countTimer)

 var count=20

setInterval(function(){
    console.log("interval running",count)
    count--
},1000)



 
  //setIntervalId =0
 var setIntervalId = setInterval(function(){
    console.log("Time Remaining")
   
   countTimer.textContent=newCount
    //console.log(count)     //------  this shows the countdown from 20
    count--; 

    newCount=count
    if (newCount===0){
    clearInterval(setIntervalId)
    }
    },1000)

    clearInterval(setIntervalId)



    // function countdown() {
    //     var count = parseInt(i.textContent, 10);
    //     if (count < 1) {
    //         clearInterval(id);
    //     }
    //     i.textContent = count - 1;
    // }
    // sId = setInterval(countdown, 1000);
    
        


//     if(newCount=0)
//     clearTimeout(setIntervalID)
// if (newCount=0){
//      clearInterval(setIntervalID)
// }


// let counter = 10;
// let timeout;
// let timer_on = 0;

// function  setIntervalID(startTest(){
//   document.getElementById("demo").value = counter;
//   counter--;
//   timeout = setTimeout(timedCount, 1000);
// }


// function stopCount() {
//   clearTimeout(timeout);
//   timer_on = 0;
// 