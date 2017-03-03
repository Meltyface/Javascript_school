// Lecture 12: Loops

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['Abraham', 'Benjamin', 'Charlotte', 'Dean', 'Edward'];

// print ascending order
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// print descending order
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
// while loop
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 0; i <=5; i++) {
    console.log(names[i]);
    
    if (i === 3) {
        break;
        // ends loop after fourth iteration
    }
}

for (var i = 0; i <=5; i++) {
    if (i === 3) {
        continue;
        // loop skips fourth iteration, continues with fifth
    }
    
    //code
}

