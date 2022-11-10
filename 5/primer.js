// Objekti

// I Kreiranje objekta:
// ------------------------------------------------------------------------------
// Nacin I: Baznim objektom
// ------------------------

// var person = new Object();

// person.firstName = "Petar"
// person.lastName = "Petrovic";
// person.age = 22;

// person.fullName = function(){
//     return (person.firstName + " " + person.lastName);
// }

// Nacin II: Funkcijom
// -------------------

// function Person(fName, lName, age){
//     this.firstName = fName;
//     this.lastName = lName;
//     this.age = age;
//     this.fullName = function(){
//         return (person.firstName + " " + person.lastName);
//     }
// }

// Nacin III: Klasom
// -----------------
// class Person{
//     constructor(fName, lName, age){
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//     }

//     copy(){
//         return new Person(this.firstName, this.lastName, this.age);
//     }
    
//     fullName = function(){
//         return (this.firstName + " " + this.lastName);
//     }
// }

// p1 = new Person("Petar", "Petrović", 21);
// console.log(`Puno ime: ${p1.fullName()}, Godine: ${p1.age}`);

// p2 = p1
// p2.age = 23;
// console.log(`Puno ime: ${p1.fullName()}, Godine: ${p1.age}`);

// p3 = p1.copy();
// p3.age = 25;
// console.log(`Puno ime: ${p1.fullName()}, Godine: ${p1.age}`);

// Nacin IV: Literalom
// -------------------

var person = {
    firstName: "Petar",
    lastName: "Petrović",
    age: 21,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(`Puno ime: ${person.fullName()}, Godine: ${person.age}`);

// II Iteracija
// ------------------------------------------------------------------------------

var v = "";
for(k in person){
    v += `${person[k]}\n`;
    console.log(k);
};

console.log(v);
