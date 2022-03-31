Using Objects for Lookups
  
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

Passed
phoneticLookup("alpha") should equal the string Adams

Passed
phoneticLookup("bravo") should equal the string Boston

Passed
phoneticLookup("charlie") should equal the string Chicago

Passed
phoneticLookup("delta") should equal the string Denver

Passed
phoneticLookup("echo") should equal the string Easy

Passed
phoneticLookup("foxtrot") should equal the string Frank

Passed
phoneticLookup("") should equal undefined

Passed
You should not modify the return statement

Passed
_______________________________________________

// Setup
function phoneticLookup(val) {
  var result = "";

  /*
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
   */


  // Only change code below this line

  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
  };

  // set up result to properly access lookup object
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");