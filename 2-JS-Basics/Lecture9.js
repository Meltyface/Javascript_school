// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

names[1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // push adds an element to the end of the array
john.unshift('Mr.'); // adds an element to the front of the array
john.pop(); // removes end element of array, and returns it.
john.shift(); // removes first element from array, returns it.
john.indexOf('Smith'); // returns index of element 'Smith'
// if element does not exist in array, indexOf returns -1
if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}