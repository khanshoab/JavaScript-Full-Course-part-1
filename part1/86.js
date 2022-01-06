// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = createUser('khan', 'hassan', 'khan@gmail.com', 9, "my address");
const user2 = createUser('shoab', 'hussain', 'shoab@gmail.com', 19, "my address");
const user3 = createUser('akhtar', 'ahmad', 'akhtar@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));
