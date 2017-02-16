// Lecture: Objects

var john = {
    name: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    job: 'teacher',
    maritalStatus: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

// Alternate methods of initialising object dictionary
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Goldberg';
jane['birthYear'] = 1988;
jane['job'] = 'research supervisor';
jane['maritalStatus'] = true;

console.log(jane);

