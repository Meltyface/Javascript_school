// Lecture 7: Functions

function calcAge (birthYear) {
    var age = 2017 - birthYear;
    return age;
}

var ageJohn = calcAge(1982);
var ageMike = calcAge(1990);
var ageMary = calcAge(1965);

console.log(ageJohn);

function yearsUntilRetirement(name, birthYear) {
    var age = calcAge(birthYear);
    var retire = 65 - age;
    if (retire > 0) {
        console.log(name + ' retires in ' + retire + ' years');    
    } else {
        console.log(name + ' has already retired');
    }
    
}

yearsUntilRetirement('John', 1982);
yearsUntilRetirement('Mary', 1945);

// Lecture 8: Statements, expressions

//Expressions
// Produces variable, or makes an action
3 + 4;
var x = 3; 

// Statements
if (x == 5) {
    //code
} // No variable, or immediate product