const json= `[
    {"id":1,"name":"A","active":true},
    {"id":2,"name":"B","active":false},
    {"id":3,"name":"C","active":true}
]`;
const employee={
name:"ram",
salary:34444,
skills:[{level:10,name:'java'},
    {level:5,name:'javascript'}]
}
console.log(employee.skills[2]);
const users=JSON.parse(json);
console.log(users[0]);