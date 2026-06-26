class TataCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}  
let nano= new TataCar("nano",29);
console.log(nano);
let tiago=new TataCar("tiago",22);
console.log(tiago);