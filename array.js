let arr=[22,34,54,12,344]
console.log(arr);

//FIND AVERAGE
let brr=[12,89,90,54,134];
let average=0;
for(let i of brr){
    average=(average+i)/brr.length;
}
console.log(`average marks obtained = ${average}`);

//find discount and print final price
let price=[34,76,40,98,100];
let discount=0;
for(let i=0;i<price.length;i++){
    discount=price[i]%10;
    price[i]=price[i]-discount;
}
console.log(`discounted price = ${price}`);