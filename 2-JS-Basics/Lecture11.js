// Lecture: Objects and methods

/* v1.0
var john = {
    name: 'John',
    lastName: 'Smoth',
    birthYear: 1990,
    job: 'teacher',
    maritalStatus: false,
    family: ['Jane', 'Mark', 'Rob'],
    // Define function inside dictionary
    calcAge: function() {
        return 2017 - this.birthYear;
    }
};

console.log(john.family[2]);
console.log(john.calcAge());
*/

// v1.1

var john = {
    name: 'John',
    lastName: 'Smoth',
    birthYear: 1990,
    job: 'teacher',
    maritalStatus: false,
    family: ['Jane', 'Mark', 'Rob'],
    // Define function inside dictionary
    calcAge: function() {
        this.age = 2017 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

