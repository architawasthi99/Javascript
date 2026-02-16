//map
let arr=[78,65,34];
let newarr=arr.map((val)=>{
    return val;
})
console.log(newarr);

//filter
let arr1=[1,2,3,4,5,6,7,8,9,10];
let newarr1=arr1.filter((val)=>{
    return val%2==0;
});
console.log(newarr1);

//reduce
//convert array to single value
let arr2=[1,2,3,4,5,6,67];
let newarr2=arr2.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(newarr2);