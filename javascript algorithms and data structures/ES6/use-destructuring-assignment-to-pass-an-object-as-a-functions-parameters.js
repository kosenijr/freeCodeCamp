/*
Use Destructuring Assignment to Pass an Object as a Function's Parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {

}
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

stats should be an object.

half(stats) should be 28.015

Destructuring should be used.

Destructured parameter should be used.
________________________________________________________________________________
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line

// replace stats with destructuring assignments: max, min
const half = ({ max, min }) => {
  // console.log(max, min);
  return (max + min) / 2.0;

}
// calling half with stats parameter will trigger array-specific elements requested
half(stats);
// check
console.log(half(stats))

// Only change code above this line