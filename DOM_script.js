alert("hello how are you buddy");
console.log("archit awasthi"); 
window.console.log("hello2"); 
console.log(window.document);
console.dir(window.document);//to print object properties

//SELECTING ELEMENTS WITH ID
let heading=document.getElementById("heading");
console.dir(heading);
let button=document.getElementById("button1");
console.dir(button);

//SELECTING ELEMENTS WITH CLASS
let headings=document.getElementsByClassName("heading3");
console.dir(headings);
console.log(headings);

//QUERY SELECTOR
let firstEl=document.querySelector("p");
console.dir(firstEl);

let allEl=document.querySelectorAll("p");
console.dir(allEl);

//PROPERTIES
let div=document.querySelector("div");
console.dir(div);