/*

Inherit Behaviors from a Supertype

In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

let animal = new Animal();

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);
Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat();
animal instanceof Animal;
The instanceof method here would return true.

Use Object.create to make two instances of Animal named duck and beagle.

The duck variable should be defined.

The beagle variable should be defined.

The duck variable should be initialised with Object.create.

The beagle variable should be initialised with Object.create.

duck should have a prototype of Animal.

beagle should have a prototype of Animal.
______________________________________________________________
*/
console.log('let\'s start!');
// create a constructor Dog: make it universal pass general params
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
// create new Dog instance for variable terrier
let terrier = new Dog('Jimmy', 'blue');
// check Jimmy the Terrier
console.log(terrier.name, terrier.color, terrier.numLegs);

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// check
console.log(`Is Duck an instance: ${duck instanceof Animal}, Is Beagle an instance: ${beagle instanceof Animal}`);


