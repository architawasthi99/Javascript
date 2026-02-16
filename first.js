console.log("archit awasthi");
console.log("jai hind");
let name="architawasthii"
age=20
console.log(age)
console.log(name)

{
    let a=10
    console.log(a)
}                           //different blocks
{
    let a=40
    console.log(a)
}
let b=10
console.log(typeof(b))

//OBJECTS
const student={
    name:"archit awasthi",
    age:21,
    cgpa:8.2
}
console.log(student)
console.log(typeof(student))
console.log(["name"])
console.log(student.age)
student["age"]=student["age"]+1;
console.log(student.age);

//INSTAGRAM 
const instagram={
    name:"alexvoid",
    post:256,
    followers:22400,
    following:45
};
console.log(instagram);

//enter a number and check it is multiple of 5 or not
n=prompt("enter the number");
if(n%5==0){
    console.log("it is multiple of 5");
}
else{
    console.log("not multiple of 5");
}

//for in loop
let kid={
    name:"harsh",
    age:21,
    gender:"male"
};
for(let key in kid){
    console.log(key);
}

//guess the number game
let number=25;
usernum=prompt("enter the number");
while(usernum!=number){
    usernum=prompt("enter the number again");
}
console.log("number found",number);