// Regular function, called explicitly by name:
function multiply() {
    const result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
const divided = function() {
    const result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    const result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())