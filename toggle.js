let mode=document.querySelector("#mode");
let theme="light";
mode.onclick=()=>{
    if(theme=="light"){
        theme="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        theme="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    console.log(theme);
}
//OR
/*
let body=document.querySelector("body");
mode.addEventListener("click",()=>{
    if(theme=="light"){
        theme="dark";
        body.classList.add("dark");}
    else{
        theme="light";
        body.classList.remove("dark");
    }
        console.log(theme);
});