var birthYears = [1985, 1977, 1999, 2001, 1969];

var ageArray = [];

for (i = 0; i < birthYears.length; i++) {
    ageArray[i] = 2017 - birthYears[i];
    if (ageArray[i] >= 18) {
        console.log('Person ' + (i+1) + ' is ' + ageArray[i] + ' years old');
    }
}

function determineAge(yearArray) {
    var ages = [];
    var ofAge = [];
    for (i = 0; i < yearArray.length; i++) {
        ofAge[i] = false;
        ages[i] = 2017 - yearArray[i];
        if (ages[i] >= 18) {
            console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old');
            ofAge[i] = true;
        }
    }
    return ofAge;
}

console.log(determineAge(birthYears));