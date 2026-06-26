class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let obj1 = new Child();



class Person{
    constructor(){
        this.species="hompsapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("work");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}
let architobj=new Engineer();
let architobj2=new Doctor();
let p1=new Person();
console.log(p1);
let e1=new Engineer()
console.log(e1);