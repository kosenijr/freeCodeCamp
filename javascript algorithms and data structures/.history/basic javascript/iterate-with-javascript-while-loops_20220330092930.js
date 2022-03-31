Iterate with JavaScript While Loops
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

Let's try getting a while loop to work by pushing values to an array.

Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

Passed
You should be using a while loop for this.

Passed
myArray should equal [5,4,3,2,1,0].
  _______________________________________________________________________________
/*

*/

// Setup
var myArray = [];

// Only change code below this line
let k = 0;
while (k < 6) {
  let o = 5 - k;
  myArray.push(o);
  k++;
}