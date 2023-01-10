/*
DAY 2 OF LEARNING JAVASCRIPT

 */

//Variable Deceleration
const initialApple = 4;
console.log(initialApple);

//

const initialApples = 4;
applesToStore = 27;
const totalApple = initialApples + applesToStore;
console.log(totalApple);

//reassigning a variable
let myName = "tayyib gbondo";
myName = "mohamed";
console.log(myName);

/*
Exercise

Declare a string with const.
Do these:
Declare a variable with let. Call this variable sum. Set it to 0.
Declare two more variables, num1 and num2. Set these to 300 and 50.
Reassign sum with the sum of num1 and num2.

*/

//Exercise 1 Answer
let sum = 0;
let sum1 = 300;
let sum2 = 50;
sum = sum1 + sum2;
console.log(sum);

//Function
//A function is a block of code that execute a task in specific order

function sayHello() {
  console.log("Hello World!");
}
sayHello();

//Function with parameter
function myFunction(param1, param2, param3) {
  console.log("First Parameter " + param1);
  console.log("Second Parameter " + param2);
  console.log("Third Parameter " + param3);
}
myFunction("myName", "myAge", "myContact");

//The Return Statement

function get2() {
  console.log("i am getting another 1");
  return "i am getting 2";
}
const result = get2();
console.log(result);

//
function add2(num) {
  return num + 5;
}
const theR = add2(5);
console.log(theR);

//expression
const expres = (2 + 3, 10);
console.log(expres);

//Calling a Function in an expression
function summ(nn) {
  return nn + nn;
}
function multiply(num1, num2) {
  return num1 * num2;
}

const outPut = summ(multiply(2, 3), 10);
console.log(outPut);

//Passing a function inside of another function
function three() {
  return 6;
}

function add2(callback) {
  return callback + three();
}
console.log(add2(9));
