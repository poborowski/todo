const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



function addTodo(event){
event.preventDefault();

const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

const newTodo = document.createElement('li');
newTodo.innerHTML= todoInput.value;
newTodo.classList.add('todo-itemmmm');
// newTodo.setAttribute('id','secondPara');

todoDiv.appendChild(newTodo);



saveLocalTodos(todoInput.value);


const compeletedButton = document.createElement('button');
compeletedButton.innerText = '✓';
compeletedButton.classList.add("complete-btn");
todoDiv.appendChild(compeletedButton);


const trashButton = document.createElement('button');
trashButton.innerText = 'x';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);


todoInput.value="";
}
function deleteCheck(e){
const item = e.target;


if(item.classList[0]== 'trash-btn'){
    const todo = item.parentElement;
   

removeLocalTodos(todo);
todo.remove();

todo.addEventListener("transitioned",function(){
todo.remove();
});
}




if(item.classList[0]== 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}

}



function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));

    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}




function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(todo){

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        const newTodo = document.createElement('li');
        newTodo.innerHTML= todo;
        newTodo.classList.add('todo-item');
        
        todoDiv.appendChild(newTodo);
        
        
        
        
        const compeletedButton = document.createElement('button');
        compeletedButton.innerText = '✓';
        compeletedButton.classList.add("complete-btn");
        todoDiv.appendChild(compeletedButton);
        
        
        const trashButton = document.createElement('button');
        trashButton.innerText = 'x';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        
        todoList.appendChild(todoDiv);


    });
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem("todos"));

    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


