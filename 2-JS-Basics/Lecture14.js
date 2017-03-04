// Lecture 14: The 'this' keyword
/*
calcAge(1997);

function calcAge(year) {
    // code...
    console.log(this);
    // 'this' keyword in this case will refer to the window object
    // 'this' is being used in a function call
}
*/
var john = {
    name: 'John',
    birthYear: 1986,
    calcAge: function() {
        console.log(this);
        // prints the john object
        // this is a method call
        console.log(2017 - this.birthYear);
        
        function innerFunc() {
            console.log(this);
            // now 'this' refers again to the window.
            // This is an example of a function call inside a method
        }
        innerFunc();
    }
};

john.calcAge();

var mike = {
    name: 'Mike',
    birthYear: 1994,
};

mike.calcAge = john.calcAge;

mike.calcAge();