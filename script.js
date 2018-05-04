//FUNCTION CONSTRUCTOR

//PROTOTYPE
/*
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
*/

//OBJECT.CREATE
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1995;
john.job = "Plumber";

var emily = Object.create(personProto, {
    name: { value: "Emily" },
    yearOfBirth: { value: 69 },
    job: { value: "Artist" }
});
*/

//PRIMITIVES VS OBJECTS\

//Primitives
var a = 69;
var b = a;
a = 33;

console.log(b); //69
console.log(a); //33

//Objects
var obj1 = {
    name: "jack",
    age: 91
};

var obj2 = obj1;
obj1.age = 32;

console.log(obj1.age);  //30
console.log(obj2.age);  //30

//Functions
var age = 22;
var obj3 = {
    name: "Miguel",
    city: "Sacramento"
};

function change(a, b){
    a = 23;
    b.city = "Nigeria";
}

change(age, obj3);

console.log(obj3);
console.log(age);