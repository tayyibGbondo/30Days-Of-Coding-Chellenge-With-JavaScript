//Array of items to buy
const toBuy = ["coffee", "drinks", "pc", "coding book"];
console.log(toBuy);

//arrays of nested arrays
const myNums = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(myNums);

//Arrays with objects
const arrayObject = [
  { firstName: "john", lastName: "doe" },
  { country: "sierra leone" },
];
console.log(arrayObject);

//Checking the number of item in an array
console.log(toBuy.length);
console.log(myNums.length);
console.log(arrayObject.length);

//getting the value of an item
console.log(toBuy[2]);
console.log(myNums[1][1]);

//getting items from the end
console.log(toBuy[toBuy.length - 3]);

//setting the value of an item
const theStrings = ["one", "two", "three", "four"];
console.log(theStrings);
const theForth = (theStrings[4] = "five");
const theSixth = (theStrings[5] = "Six");
console.log(theStrings);
