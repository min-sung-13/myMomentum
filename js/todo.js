const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// can update
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    // todo.id(number) li.id(string)!!!! 타입 다른거 중요함
    // li.id 타입을 String -> number로 바꿔주기
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function completeTodo(event) {
    const li = event.target.parentElement.parentElement;
    li.classList.toggle("complete");
    li.classList.toggle("checked");
}

function paintTodo(newTodo) {
    // todoList 생성
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    // todo check, delete button box 와 button들 생성
    // button 생성 이후에 button-box(div)에 append
    const div = document.createElement("div");
    div.id = "button-box";

    // todo 완수 시 클릭하는 button 생성
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✅";
    checkBtn.addEventListener("click", completeTodo);
    // todo 지우기 위한 button 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTodo);

    // button box에 2개의 button append
    div.appendChild(checkBtn);
    div.appendChild(deleteBtn);
    // list에 todo(text)와 buttonbox append
    li.appendChild(span);
    li.appendChild(div);
    // list(목록)에 todo append
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    // todoInput.value를 newTodo라는 변수에 복사함
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}