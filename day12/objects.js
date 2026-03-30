const users = [
    {"id":1,"name":"A","active":true},
    {"id":2,"name":"B","active":false},
    {"id":3,"name":"C","active":true},
];

users.forEach((user) => {
    if (user.active === true) {
        user.active = false;
    }
});

console.log(users);
//console.log(users[0].name);    
// function countActive(users){
//     return users.filter((user,index)=>{
//         return user.active;
//     });
//console.log(countActive(users));

// function countActive(){
// let count = 0;

//     for(let i = 0; i < users.length; i++){
//         if(users[i].active === true){
//             count++;
//         }
//     }
// console.log(count);
//}
//countActive(users);
// count user1={
//     name:'john',
//     age:10,
//     address:{
//         house:75,
//     }
// }
// console.log(user1.name);
// console.log(user1['name']);
// console.log(user1.address.pin);

// class User{
//     name="Pariwesh"
// }
// const u1= new User();
// console.log(u1.name);
// let i=true;
// let str=i.toString();