var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

var todos = ['Fazer café', 'Me arrumar', 'Estudar JS'];

function renderTodos() {
    listElement.innerHTML="";

for (todo of todos) {
    
    var itemElement = document.createElement('li');
    var textElement = document.createTextNode(todo);
    itemElement.appendChild(textElement);
    listElement.appendChild(itemElement);
}
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";

    renderTodos();
}

buttonElement.onclick = addTodo;