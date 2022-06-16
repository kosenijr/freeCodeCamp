/*
Implement the filter Method on a Prototype

You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

new_s should equal [23, 65, 5].

Your code should not use the filter method.
________________________________________________________________
*/
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];
    // forEach method to run ternary condition and then push to new array
    s.forEach(elem => (elem % 2) === 1 ? newArray.push(elem) : null);
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

// new_s should equal [23, 65, 5].
console.log(new_s); // 