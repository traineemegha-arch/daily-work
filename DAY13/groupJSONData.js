const users=[
    {name:"A",role:"admin",salary:4000},
    {name:"B",role:"user",salary:4000},
    {name:"C",role:"user",salary:5000}
];
function groupBySalary(users){
let a={
    4000:[{},{}],
    5000:[{}]
}}
function groupByRole(users){
const grouped=users.reduce((acc,user)=>{
    if(!acc[user.role])acc[user.role]=[];
        acc[user.role].push(user);
        return acc;
     }, {});
     console.log(grouped);
    }
    groupByRole(users)