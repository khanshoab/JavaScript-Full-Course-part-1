// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "khan"},
    {userId : 2, userName: "shoab"},
    {userId : 3, userName: "akhtar"},
    {userId : 4, userName: "vakil"},
    {userId : 5, userName: "ahmad"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);