let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(){
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('todo-time');
    const errorMsg = document.getElementById('error-msg');
    const priorityInput = document.getElementById('priority');
    const text = input.value;
    const trimmedText = text.trim();
    const time = timeInput.value;
    const priority = priorityInput.value;
    if(trimmedText === ''){
        errorMsg.textContent = "Name is mandatory";
        return;
    }
    errorMsg.textContent = "";
    todos.push({
        text: trimmedText,
        time,
        priority,
        completed:false
    });
    input.value='';
    timeInput.value='';
    saveTodos();
    renderTodos();
}

function deleteTodo(index){
    todos.splice(index,1);
    saveTodos();
    renderTodos();
}

function toggleComplete(index){
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function sortTodos(){
    todos.sort((a,b)=> a.text.localeCompare(b.text));
    saveTodos();
    renderTodos();
}

function renderTodos(){
    const list = document.getElementById('todo-list');
    list.innerHTML='';
    todos.forEach((todo,index)=>{
        const li=document.createElement('li');
        li.innerHTML=`
        <span class="${todo.completed ? 'completed' : ''}">
        ${todo.text} 
        ${todo.time ? `(${todo.time})` : ''} 
        - ${todo.priority}
        </span>
        <div>
        <button onclick="toggleComplete(${index})">✔</button>
        <button onclick="deleteTodo(${index})">✖</button>
        </div>
        `;
        list.appendChild(li);
    });
}

document.getElementById("todo-input").addEventListener("input", function(){
    const errorMsg = document.getElementById("error-msg");
    errorMsg.innerText = "";
});

renderTodos();