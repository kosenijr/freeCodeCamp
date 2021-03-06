/*
Match All Letters and Numbers

Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

Your regex should use the global flag.

Your regex should use the shorthand character \w to match all characters which are alphanumeric.

Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.

Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.

Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!

Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
______________________________________
*/

// exercise
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(
  quoteSample,
  `\n`,
  alphabetRegexV2,
  `\n`,
  result
);

/*
// for the purpose of study
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w/g;
let numbers = "42 and inches";
let varNames = "important_var";
let lHn = numbers.match(longHand);
let sHn = numbers.match(shortHand);
let lHvN = varNames.match(longHand);
let sHvN = varNames.match(shortHand);

console.log(
  lHn,
  `\n`,
  sHn,
  `\n`,
  lHvN,
  `\n`,
  sHvN,
);
*/


/*
NOTES
- \w shortcut is inclusive of the underscore in the range: [A-Za-z0-9_];
- removing the '+' from '/\w+/g', provides the shortcut the ability to match each character from the [A-Za-z0-9_] range;
*/