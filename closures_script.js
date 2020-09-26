// Closures shown with a short example
function calculateTheMath(){
    var a = 5;
    var b = 6;
    function multiply(){
        return a*b;
    }
    return multiply;
}

var mathematics = calculateTheMath();

console.log(calculateTheMath()); // complete function

// console.log(multiply()); you can not acces the closures function independently

console.log(mathematics()); //30