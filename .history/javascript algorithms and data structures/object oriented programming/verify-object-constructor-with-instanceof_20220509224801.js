/*
Verify an Object's Constructor with instanceof

Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
This instanceof method would return false.

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

myHouse should have a numBedrooms attribute set to a number.

You should verify that myHouse is an instance of House using the instanceof operator.
______________________________________________________________
*/
console.log('let\'s start!');
// House constructor with general param
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
// Only change code below this line

//   create a new instance of House: myHouse
let myHouse = new House(5);
// check log and instanceof myHouse
console.log(myHouse);
let question = myHouse instanceof House;
console.log(question);
