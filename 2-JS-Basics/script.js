//Lecture 1: Variables Pt 1
/*
var name = 'No'; //Dynamic typing means variables need not be specific type
console.log(name);


Multi-line comments


var surname = 'Face';
console.log(surname);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

///////////////////////////
//Lecture 2: Variables Pt 2
/*
var name 'Porco';
var age = 44;

console.log(name + age);
console.log(age + age);

var job, maritalStatus;

//console.log(job); // undefined

job = 'pilot';

maritalStatus = true;

console.log(name + " is a " + age + " year old " + job + ", and it is " + maritalStatus + " that he is married.");

age = 'forty-four';
maritalStatus = false;

var lastName = prompt("What is Porco's last name?") // Accepts input from console.
*/

///////////////////////
// Lecture 3: Operators
/*
var now = 2017;
var birthYear = 2017 - 44;

birthYear = 2017 - 44 * 2;

console.log(birthYear);
*/

/////////////////////
// Lecture 4: if-else
var name = 'John';
var age = 26;
var maritalStatus = false;

maritalStatus ? console.log('Congratulations!') : console.log('You will find someone');

if (maritalStatus === true) { // triple-equal sign! Does not convert type.
    console.log('She said yes!');
}

if (maritalStatus == "true") { // double-equal does account for type conversion.
    console.log("She's your third wife?");
}
