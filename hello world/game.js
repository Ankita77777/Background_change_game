let pink=document.querySelector("#pink");
let red=document.querySelector("#red");
let btn3=document.querySelector("#green");
let btn4=document.querySelector("#yellow");
let btn5=document.querySelector("#orange");
let btn6=document.querySelector("#purple");

let body=document.querySelector("body");

pink.addEventListener("click", function(){
    body.style.backgroundColor="pink";
})

red.addEventListener("click", function(){
    body.style.backgroundColor="red";
})

btn3.addEventListener("click", function(){
    body.style.backgroundColor="green";
})

btn4.addEventListener("click", function(){
    body.style.backgroundColor="yellow";
})

btn5.addEventListener("click", function(){
    body.style.backgroundColor="orange";
})

btn6.addEventListener("click", function(){
    body.style.backgroundColor="purple";
})
