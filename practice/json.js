const json= `[
    {"id":1,"name":"A","active":true},
    {"id":2,"name":"B","active":false},
    {"id":3,"name":"C","active":true},
]`;
const employee={
name:"ram",
salary:34444,
skills:['Java','spring','javascript']
}
console.log(employee.skills[2]);
const users=JSON.parse(json);
console.log(users[0]);