let btn=document.createElement("button");
btn.innerText="CLICK MEE";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.fontSize="30px";

let body=document.querySelector("body");
body.prepend(btn);
//OR
//document.querySelector("body").prepend(btn);