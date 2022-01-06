// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'khan', gender: 'male'},
    {userId: 2,firstName: 'shoab', gender: 'male'},
    {userId: 3,firstName: 'akhtar', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}
