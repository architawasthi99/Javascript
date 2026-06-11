 function myFunction(){
    console.log("hello world");
 }
 myFunction();

 function hello(msg){
    console.log(msg);
 }
 hello("welcome to javascript"); 

//TAKES STRINGS AND RETURN VOWELS
function vowel(str){
   let count=0;
   for(let str1 of str){
      if("aeiouAEIOU".includes(str1)){
         count++;
      }
   }
   console.log(count);
}vowel("architawasthi");

const vowelcount=(str)=>{
   let count=0;
   for(let str1 of str){
      if("aeiouAEIOU".includes(str1)){
         count++;
      }
   }
   console.log(count);
};vowelcount("architawasthi");

 //ARROW FUNCTIONS
const mul =(a,b)=>a*b;{
   console.log(mul(5,5));
}

const multi=(a,b)=>{
   console.log(a*b);
}
multi(5,5);

const add=(a,b)=>{
   console.log(a+b);
}

//FOR - EACH LOOP
let arr=[1,2,3,4,5,6,7];
arr.forEach(function printval(val){
   console.log(val);
});

let brr=[11,22,33,44,55,66];
brr.forEach((val) =>{
   console.log(val);
});

let crr=[1,2,3,4,5,6,7,8];
crr.forEach((val)=>{
   console.log(val*val);
});

//PRINT ARRAY USING MAP FUNCTION
let drr=[1,2,3,4];
drr.map((val)=>{
   console.log(val);
});
//PRINT NEW ARRAY USING MAP FUNCTION
let err=[67,68,69];
let newerr=err.map((val)=>{
   return val;
});
console.log(newerr);
//PRINT SQUARE OF ARRAY USING MAP FUNCTION
let frr=[77,88,99,100];
let newfrr=frr.map((val)=>{
   return val*val;
});
console.log(newfrr);
