const student={
    fullName:"ARCHIT AWASTHI",
    marks:95.9,
    printMarks: function(){  //function
        console.log("marks = ",this.marks);
        console.log(student.fullName);
    },
};

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const archit={
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%");
    }
};
const archit1={
    salary:50000,
};
const archit2={
    salary:50000,
};
const archit3={
    salary:50000,
};

archit.__proto__=employee;
archit1.__proto__=employee;
archit2.__proto__=employee;
archit3.__proto__=employee;