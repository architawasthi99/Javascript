let btn2=document.querySelector("#btn2");

btn2.ondblclick=()=>{
    console.log("button double clicked");
    let a=prompt("enter your name");
    console.log(a);
}

let div=document.querySelector("#div");
div.onmouseover=()=>{
    console.log("mouse over");
    div.style.backgroundColor="red";
}

//EVENT OBJECT
let bt3=document.querySelector("#btn3");
bt3.ondblclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.innerText); 
}


//EVENT LISTENER  
let bt4=document.querySelector("#btn4");
btn4.addEventListener("click",()=>{
    console.log("button 4 was clicked");
})
btn4.addEventListener("click",(e)=>{
    console.log("button 4 was clicked - handler 2");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.innerText);
    console.log("END");
})