// Lecture 5: Boolean Logic, Switch
var age = 16;

if (age < 20) {
    console.log('Just a teenager');
} else if (age >= 20 && age < 30){
    console.log('You are a man now');
} else {
    console.log('Getting older');
}

var job = 'teacher';

job = prompt('What do you do?');

switch (job) {
    case 'teacher':
        console.log('You teach kids');
        break;
    case 'scientist':
        console.log('You make important discoveries');
        break;
    case 'policeman':
        console.log('You help keep the city safe');
        break;
    default:
        console.log('You are unemployed');
        break;
}
