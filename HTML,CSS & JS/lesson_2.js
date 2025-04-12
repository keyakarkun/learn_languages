// Comparison Operators

//==
//===
console.log(5 == 5);    // true
console.log(5 === 5);       // true


console.log(5 == "5");      // true
console.log(5 === "5");     //false    // NOTE: === test the value and datatype both 


console.log(5!=5);        //false
console.log(5!==5);       //false

console.log(5!="5");      //false
console.log(5!=="5");     //true 


console.log(10 !='10');  //false
console.log(5>5);        //false



//Conditional operators
//if..else
const response="yes";

if(response=="yes"){
    console.log("Well! done ");
}else{
    console.log("Sorry, you missed it");
}


//if..else if...else

let marks=30;

if(marks>=30){
    console.log("Greater than 30");
}else if(marks>=20 && marks<30){
    console.log("Greater than 20 but less than 20");
}else{
    console.log("Less than 20");
}


// && , || , !

const isCool=true;
const isWarm=false;

console.log(!isCool);         //false
console.log(isCool && isWarm);  //false
console.log(isCool || isWarm);  //true


