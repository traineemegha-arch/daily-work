let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(){
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('todo-time');
    const errorMsg = document.getElementById('error-msg');

    const text = input.value.trim();
    const time = timeInput.value;

    if(text === ''){
        errorMsg.textContent = "Name is mandatory";
        return;
    }

    errorMsg.textContent = "";

    const priority = document.querySelector('input[name="priority"]:checked').value;

    todos.push({
        text,
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

function getPriority() {
   
    document.getElementById("result").innerText = "Selected priority: " + priority;
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

renderTodos();