// nested destructuring 
const users = [
    {userId: 1,firstName: 'khan', gender: 'male'},
    {userId: 2,firstName: 'shoab', gender: 'male'},
    {userId: 3,firstName: 'akhtar', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);