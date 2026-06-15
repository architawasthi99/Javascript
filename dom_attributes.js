let div=document.querySelector("div");
console.log(div);
console.dir(div);

let id=div.getAttribute("id");
console.log(id);

let idd=div.getAttribute("name");
console.log(idd);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(div.style);
div.style.backgroundColor="green";
div.style.fontSize="30px";

// INSERT NEW ELEMENT
let btn=document.createElement("button");
btn.innerText="DON'T CLICK ME";
btn.style.backgroundColor="red";
btn.style.fontSize="20px";
btn.style.color="white";
console.log(btn);

div.append(btn);
div.prepend(btn);
div.before(btn);
div.after(btn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>NEW HEADING</i>";
newHeading.style.color="purple";
newHeading.style.textAlign="center";
newHeading.style.textDecoration="underline";
newHeading.style.textDecorationColor="red";
newHeading.style.textDecorationStyle="wavy";
document.querySelector("body").append(newHeading);