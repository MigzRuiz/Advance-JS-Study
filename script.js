//FUNCTION CONSTRUCTOR

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