/*
Use a Constructor to Create Objects

Here's the Bird constructor from the previous challenge:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;
Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

hound should be created using the Dog constructor.

Your code should use the new operator to create an instance of Dog.
______________________________________________________________
*/
console.log('let\'s start!');
// create a constructor
function Dog() {
    this.name = 'Hannibal';
    this.color = 'black';
    this.numLegs = 4;
}

