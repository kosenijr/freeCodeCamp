/*
Nesting For Loops

If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Passed
multiplyAll([[1],[2],[3]]) should return 6

Passed
multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040

Passed
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54
_______________________________________________
*/
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let k = 0; k < arr.length; k++) {
    for (let p = 0; p < arr[k].length; p++) {
      product *= arr[k][p];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);