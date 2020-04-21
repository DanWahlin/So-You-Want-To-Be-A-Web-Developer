//function name / function parameter
function drove(miles, minutes) {
    // ! = not, || = or, && = and
    if (!miles) { //If miles does NOT have any value (undefined, null, false, 0, '')
        miles = 0;
    } 

    if (!minutes) { //If minutes does NOT have a value (undefined, null, false, 0, '')
        minutes = 0;
    }
    return 'Seth drove ' + miles + ' miles in ' + minutes + ' minutes!'
}

var mils = 100;
var mins = 10;

var driveValue1 = drove(mils, mins);

console.log('%c' + driveValue1, 'font-weight: bold;color: green');



