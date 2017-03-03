// Lecture 13: Hoisting
// Hoisting is calling a function before creating it. 
// This works because the function is defined before execution, 
// but the call isn't executed until the execution step.
calcAge(1990);

function calcAge(Year) {
    console.log(2017- Year);
    
}

// Variable hoisting is different.

