// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "shoab",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "khan",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "akhtar",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

