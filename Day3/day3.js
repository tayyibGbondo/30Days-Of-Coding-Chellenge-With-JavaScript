//Declaring functions with function expressions
const sayHello = function () {
  console.log(
    "Hello world a am declaring a function with a function expression"
  );
};
console.log(sayHello());

/* 

Exercise
Practice making functions. You need to use them a lot when you code for real. Do the following:

Make a function named logger that console.log the argument you passed into it.
Make a function called add that adds two numbers together.
Make a function called multiply that multiplies two numbers together.

 */

//Exercise 1 Answer
function logger(arg) {
  console.log(arg);
}
logger(5);

//Exercise 2 Answer
function add(num1, num2) {
  return num1 + num2;
}
const answer = add(5, 5);
console.log(answer);

function two() {
  return 2;
}

function three(callback) {
  return callback * 3;
}
const result = three(two());
console.log(result);

const sayMyName = function (name) {
  return "hello " + name;
};
const sayAnswer = sayMyName("tayyib");
console.log(sayAnswer);

//Arrow Function
const wish = (newYear) => {
  return newYear;
};
console.log(wish("Happy new year!"));

/*
Exercise
Arrow functions are important. You’ll see more and more arrow functions in the future. We’re also going to use them a lot in this course. Make sure you’re familiar with them.

For this lesson, do the following:

Make a function named ten that takes in zero arguments and return the value 10. Try using both () and _ syntax.
Make a function named logger that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis ().
Make a function called add that adds two numbers together. Try it with and without implicit returns.
Make a function called multiply that multiplies two numbers together. Try it with and without implicit returns. 
*/

//Exercise 1 Answer
const ten = (_) => {
  return 10;
};
console.log(ten());

//

//Object
const bag = {
  book: "note book",
  pen: 2,
  computer: {
    model: "Dell",
    color: "black",
    storage: 250,
    processor: "2hz",
  },
  charger: 1,
  takeCare: function () {
    console.log("hello there im inside of an object");
  },
  fruit: ["mango", "banana", "plantain", "apple"],
};

const propa = bag.computer;

//Deleting properties
delete bag.computer.processor;

console.log(propa);

/*
Exercise
Practice making objects. You need to use them a lot when you code for real. D8o the following:

Make an empty object.
Make a property for your object that can be accessed with a dot notation. Get the value of this property.
Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
Set the value of a property with the dot notation.
Set the value of a property with the square bracket notation.
Make a method. Call this method.
Make a method that takes in an argument. Call this method.

*/

const soup = {
  maggi: "ami maggi",
  onion: 2,
};
const soupAnswer = soup["maggi"];
console.log(soupAnswer);

/*
Exercise 

James is 22 years old, Valerie is 25 years old, Kenneth is 27 years old. Answer the following questions with the above code:

Make an if/else statement to check if you are younger than James.
Make an else if statement within your if/else to check if you are older than Valerie.
Make another else if statement to check if you’re as old as Kenneth.
When you do the above exercise, try comparing values with:

> and >=
< and <=
===
!==
Answer the rest of the questions below with reference to the following code: 

*/

const james = 22;
const valerie = 25;
const kenneth = 27;
const me = 19;

if (me < james) {
  console.log("Am Younger than James");
} else if (me > valerie) {
  console.log("older than Valerie");
} else if (me >= kenneth) {
  console.log("as old as kenneth");
}

//The NOT operator

console.log(!!"");
