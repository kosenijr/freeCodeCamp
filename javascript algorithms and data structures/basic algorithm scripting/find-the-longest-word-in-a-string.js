/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

findLongestWordLength("May the force be with you") should return 5.

findLongestWordLength("Google do a barrel roll") should return 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
______________________________________________________________________________
*/

function findLongestWordLength(str) {
    // use split property to separate strings into substrings, use space w/in quotes
    let words = str.split(' ');
    // check result: s
    console.log(words);

    // sort words in descending order: use '-' symbol instead of '+'
    let word = words.sort((a, b) => b.length - a.length);
    // check results: s
    console.log(word, typeof (word));
    // store within str for proper return
    str = word[0];
    // check storage
    console.log(str.length)
    // let's rock!
    return str.length;
}
// must call function for return
findLongestWordLength("The quick brown fox jumped over the lazy dog");