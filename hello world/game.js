let body=document.querySelector("body");
let btns=document.querySelectorAll("button");


for(let btn of btns)
{
    btn.addEventListener("click", function(){
        body.style.backgroundColor=this.id;
    })
}




// let pink=document.querySelector("#pink");
// let red=document.querySelector("#red");
// let green=document.querySelector("#green");
// let yellow=document.querySelector("#yellow");
// let orange=document.querySelector("#orange");
// let purple=document.querySelector("#purple");

// pink.addEventListener("click", function(){
//     body.style.backgroundColor="pink";
// })

// red.addEventListener("click", function(){
//     body.style.backgroundColor="red";
// })

// green.addEventListener("click", function(){
//     body.style.backgroundColor="green";
// })

// yellow.addEventListener("click", function(){
//     body.style.backgroundColor="yellow";
// })

// orange.addEventListener("click", function(){
//     body.style.backgroundColor="orange";
// })

// purple.addEventListener("click", function(){
//     body.style.backgroundColor="purple";
// })
