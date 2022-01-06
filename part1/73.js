function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "khan",
    age: 8,   
}
const user2 = {
    firstName : "shoab",
    age: 9,
    
}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();
