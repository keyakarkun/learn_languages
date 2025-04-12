//LOOPS

//FOR LOOP
let fruits=["apple","mango","kiwi","watermelon","plum"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//WHILE LOOP

let countdown=10;

while(countdown>=0){
    console.log(countdown);
    countdown--;
}

// FUNCTIONS

// Create a function to add two numbers

function AddNumbers(num1,num2){
    console.log(num1+num2);        //using console.log
}

AddNumbers(5,10);
AddNumbers(234,678);


// ----------------------------------------------------------------------------------------------------------------------
            // In Above code we are doing with console.log while in below code we are using return statement.  

function addnumbers(num3, num4){
    return num3 +num4;          //Using return 
}
let total1=addnumbers(4,5);
let total2=addnumbers(789,987);

console.log(total1);
console.log(total2);

