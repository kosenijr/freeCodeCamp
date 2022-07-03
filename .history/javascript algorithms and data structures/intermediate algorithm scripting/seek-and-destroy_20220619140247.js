/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

destroyer([2, 3, 2, 3], 2, 3) should return [].

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
________________________________________________________________
*/
// abbrev logs to console. then check.
const log = console.log;
log('reday to go!');
// create destroyer function
function destroyer(arr) {

    // Option 1
    /*
        // check arguments object
    // log(arguments);
    // for-loop for navigation
    for (let k = 1; k < arguments.length; k++) {
        // check arguments object with k variable
        // log(arguments[k]);
        // use filter method on arguments
        arr = arr.filter(elem => elem !== arguments[k] ? arr.push(elem) : null);
    }
    */
    
    // Option 2
    log(Object.keys(arguments)); // logs all keys of arguments object, as strings
    log(Object.values(arguments), typeof (parseInt(Object.keys(arguments)[1])));

    // use filter method on arguments
    arr.filter(elem => parseInt(Object.keys(arguments)) > 0 ? )

    log(arr);
    return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);