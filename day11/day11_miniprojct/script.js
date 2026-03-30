let task=[];
function addTask(){
    let input=document.getElementById("taskInput");
   
    if(taskText === "") return;
    tasks.push(taskText);
    input.value="";
    renderTasks();
}

function renderTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";
    for(let i=0;i<task.length;i++){
        let li= document.createElement("li");
        li.innerHTML=`
        ${tasks[i]}
            <button onclick="deleteTask(${i})">❌</button>        
            `;
            list.appendChild(li);
        }
}

function deleteTask(index){
    tasks.splice(index,1);
    renderTasks();
}

function toggleComplete(event){
    event.target.classList.toggle("completed");
}
li.onclick=toggleComplete;
 let taskText= input.ariaValueMax;
    localStorage.setItem("tasks", JSON.stringify(tasks));
let saved=localStorage.getItem("tasks");
if(saved){
    tasks=JSON.parse(saved);
    renderTasks();
}
window.onload =function(){
    let saved=this.localStorage.getItem("tasks");
    if(saved){
        tasks=JSON.parse(saved);
        renderTasks();
    }
}