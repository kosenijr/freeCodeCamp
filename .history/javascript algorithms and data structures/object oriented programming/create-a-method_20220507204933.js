/*
Create a Method on an Object

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

dog.sayLegs() should be a function.

dog.sayLegs() should return the given string - note that punctuation and spacing matter.______________________________________________________________
*/

console.log('hey');
// create object by using constructor
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: (animal) => `This ${animal} has ${dog.numLegs} legs.`
};
// call function
dog.sayLegs();
console.log(dog.sayLegs());