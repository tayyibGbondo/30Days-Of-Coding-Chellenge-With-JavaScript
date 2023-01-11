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
