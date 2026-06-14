let newHeading=document.querySelector("h2");
console.log(newHeading.innerText);
newHeading.innerText+=" from indian institute of technology";
newHeading.textContent+=" from iit";

let division=document.querySelectorAll(".box");
console.log(division);
console.log(division[0])
console.log(division[0].innerText);

/*

for(let d of div){
    console.log(d.innerText);
}

div[0].innerText="this is box 1";
div[1].innerText="this is box 2";
div[2].innerText="this is box 3";

console.log("MID");

for(let d of div){
    console.log(d.innerText);
}

*/
let divs=document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    div.innerText=`new box value ${idx}`;
    console.log(div.innerText);
    idx++;
}
