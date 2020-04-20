var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var listElement = document.querySelector('ul');

var todos = ['1', '2', '3'];

function renderTodos() {

    listElement.innerHTML = "";

    for (todo of todos) {

        var liElement = document.createElement('li');
        var liText = document.createTextNode(todo);

        var excluirElement = document.createElement('a');
        var excluirText = document.createTextNode('Excluir');
        excluirElement.appendChild(excluirText);
        excluirElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        excluirElement.setAttribute('onclick', 'excluirTodo(' + ')');


        liElement.appendChild(liText);
        listElement.appendChild(liElement);
        listElement.appendChild(excluirElement);

    }
}

renderTodos();

function addTodo() {
    var itemAdd = inputElement.value;
    todos.push(itemAdd);
    inputElement.value = "";

    renderTodos();

}

buttonElement.onclick = addTodo;

function excluirTodo(pos) {

    todos.splice(pos, 1);

    renderTodos();

}