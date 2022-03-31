/*
Generate Random Whole Numbers within a Range

Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
Math.floor(Math.random() * (max - min + 1)) + min

Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

Passed
The lowest random number that can be generated by 
randomRange
 should be equal to your minimum number, 
myMin.
Passed
The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
Passed
The random number generated by randomRange should be an integer, not a decimal.
Passed
randomRange should use both myMax and myMin, and return a random number in your range.
_________________________________________________________________________________

*/

function randomRange(myMin, myMax) {
  // Only change code below this line
  console.log(
    myMin,
    '\n',
    myMax,
    '\n  ', 
    (myMax - myMin + 1) + myMin,
    '\n    ', 
    (myMax - myMin + 1) + myMin,
    '\n      ',
    Math.random(),
    '\n       ',
    (Math.random() * (myMax - myMin + 1)),
    '\n        ',
    (Math.random() * (myMax - myMin + 1)) + myMin
     
  

  )

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  // Only change code above this line
}