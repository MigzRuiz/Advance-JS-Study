//FUNCTION CONSTRUCTOR

//PROTOTYPE
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name,
    this.yearOfBirth =  yearOfBirth,
    this.job = job
};

//Prototype Object = because we don't want each instance of Person to have calculateAge function
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
}

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ("Jane", 1995, "Dancer");
var mark = new Person ("Mark", 1969, "Retired");

john.calculateAge();