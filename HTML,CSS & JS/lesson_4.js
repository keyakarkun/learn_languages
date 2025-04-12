//Web Developement Time 

// Creating and adding new HTML elements using JavaScript

const newheader=document.createElement("h2");

newheader.textContent="This is heading 2";

document.body.appendChild(newheader);


// Removing HTML elements using JavaScipt

const elementToRemove= document.getElementById("remove-this-element");

elementToRemove.remove();


//Modifying HTML elements using JavaScript

// Step 1: Find the elements

const changeText=document.getElementById("change-text");
const hideText=document.getElementById("hide-text");

// Step 2: Modify the textContent of an element 

changeText.textContent="Text Changed_1";
hideText.textContent="Text Changed_2";

// Step 3: Remove an element 

// changeText.remove();
// hideText.remove();

const elementToStyle = document.getElementById("sign_up_link");

elementToStyle.style.color="green";


// Inline Events
// function myfunction(){
//     document.getElementById("sign_up_link").innerText="Button Clicked!"
// }

const button = document.getElementById("sign_up_link");

button.addEventListener("click",function(){
    button.innerText="Button Clicked!";
    button.style.backgroundColor="green";
    button.style.color="white";
});