//Print the output

console.log("Keya");

//Declare a variable

//let fullname;

//Assign a value to a variable

let fullname="Keya Karkun";
console.log(fullname);

//Reassign a variable
fullname="Jeya Karkun";
console.log(fullname);

//Use let when the value of a variable can change 
let firstname="keya";
firstname="Jeya";


//Use const when the value cannot change 
const pi=3.1415926;

const daysOfTheWeek=7;

//strings
let fullName="keya karkun";   //quotation mark can be be single or double 
console.log(fullName);
//numbers
let age=21;
console.log(age);

//booleans
let newsletter =true;
console.log(newsletter);

let a=10;
let b=5;

// Addition

let result= a + b;
console.log(a+b);
// Subtraction
console.log(a-b);
// Multiplication
console.log(a*b);
// Division
console.log(a/b);
// Modulus
console.log(a%b);
// Increment
a++;   //a+1
console.log(a);
// Decrement
b--;      //b-1
console.log(b);

//concatenation
const greeting="Hello";
const userName="Keya";
console.log(greeting+" "+userName);

let firstName="Keya";
let lastName="Karkun";
console.log(firstName+" "+lastName);

// Interpolation
const first="Hello";
const last="karkun";

// const message=`${first} hello ${last}`;
// console.log(message);

//Joining strings and numbers

let c=5;
let d="5";

console.log(c+d);

//Undefined 

let messages;
console.log(messages);

// Null
let name=null;
console.log(name);

let message = null;
message="Hello";
console.log (message) ;

//Creating an Array 

let fruits=["apple","plum","cherry"];

//Access the elements

console.log(fruits[0]);
console.log(fruits);

//Adding , removing and Replacing items 

fruits[0]="banana";   
console.log(fruits);

fruits.push("orange", "watermelon", "mango");    //for adding multiple items
console.log(fruits);

fruits.pop();            // for removing last element 
console.log(fruits);

console.log(fruits.length);    //for finding the length of an array
