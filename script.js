//FUNCTION CONSTRUCTOR

//OBJECT.CREATE
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
