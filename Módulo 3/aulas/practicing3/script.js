var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul');

var todos = ['Atividade 1', 'Atividade 2', 'Atividade 3'];

function renderTodos () {

    listElement.innerHTML = "";

    

    for (todo of todos) {

        var itemElement = document.createElement('li');
        var textElement = document.createTextNode(todo);
        listElement.appendChild(itemElement);
        itemElement.appendChild(textElement);

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