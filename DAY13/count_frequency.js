const users=[
    {name:"A",role:"admin"},
     {name:"B",role:"user"},
      {name:"C",role:"admin"},
];
const freq=users.reduce((result,user)=>{
    result[user.role]=(result[user.role]|| 0) +1;
    return result;
},{});
console.log(freq);