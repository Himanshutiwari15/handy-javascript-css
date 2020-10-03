// Closures shown with a short example
function calculateTheMath(){
    const a = 5;
    const b = 6;
    function multiply(){
        return a*b;
    }
    return multiply;
}

const mathematics = calculateTheMath();

console.log(calculateTheMath()); // complete function

// console.log(multiply()); you can not acces the closures function independently

console.log(mathematics()); //30