//FIRST CLASS FUNCTIONS
var years = [1995, 2005, 2003, 2010, 1992];

function arrayCalc(arr, fn) {
    var newArr = [];
    for(var i=0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

function calculateAge(element) {
    return 2018 - element;
}

function isFullAge(element) {
    return (element >= 18);
}

var ages = arrayCalc(years, calculateAge);
var ripeAge = arrayCalc(ages, isFullAge);

console.log(ages);
console.log(ripeAge);