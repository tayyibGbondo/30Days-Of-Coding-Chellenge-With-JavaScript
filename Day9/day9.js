//Array and Arrays Methods
const messsage =
  "Thank be to God i finally made it to learn Arrays and Arrays Methods";
console.log(messsage);

//Finding the position of an arrays
const gadgets = ["phone", "computer", "headset", "speakers"];
const findingTheIndex = gadgets.indexOf("headset");
console.log(findingTheIndex);

//Adding items to the start of an array
const num = [2, 3, 4, 5];
num.unshift(0, 1);
console.log(num);

//Adding items to the end of an arrays
const toTheEnd = [1, 2, 3];
toTheEnd.push(4);
console.log(toTheEnd);

//Removing Item from the start of an Array
const favFood = ["rice", "chicken", "soup"];
console.log(favFood);
favFood.shift();
console.log(favFood);

//Removing items from the end of an arrays
const sport = ["football", "basketball", "mission video game", "GTA"];
console.log(sport);
sport.pop();
console.log(sport);

//The Almighty Splice
//Adding with splice
const count5 = [5, 10, 15, 20];
console.log(count5);
count5.splice(4, 0, 25, 30);
console.log(count5);

//Deleting with Splice
count5.splice(4, 2);
console.log(count5);

//Adding item to the end with splice
count5.splice(count5.length, 0, 25);
console.log(count5);

//using the JOIN methods
const joinMethod = ["fire", "air", "water"];
console.log(joinMethod.join());

//using Splice method
const animals = ["ant", "bison", "camel", "duck", "elephant"];
animals.splice(-2);
console.log(animals);

//using the concat method
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
