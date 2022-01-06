const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('khan', 'hassan', 'khan@gmail.com', 9, "my address");
const user2 = createUser('shoab', 'hussain', 'shoab@gmail.com', 19, "my address");
const user3 = createUser('akhtar', 'ahmad', 'akhtar@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());