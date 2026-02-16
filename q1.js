let n=prompt("enter the value of n");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);

//addition of all 
let brr=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(`The sum of ${n} number is `,brr);

//product
let brr1=arr.reduce((prev,curr)=>{
    
});