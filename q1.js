let data="scret information";
 
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("website data=",data);
    }
}

let student1=new user("aradhya","aradhya6677@gmail.com");
let student2=new user("archit","archit2786@gmail.com");
console.log(student1);
console.log(student1.viewdata());
console.log(student2);
console.log(student2.viewdata());
