// DEFINIR ELEMENTOS
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');


// RENDERIZAR ITENS
var todos = ['Atividade 1', 'Atividade 2', 'Atividade 3'];

function renderTodos() {

    listElement.innerHTML = "";

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        // ADICIONAR LINK DE EXCLUSAO
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Excluir');

        // ADICIONAR A FUNÇÃO DE EXCLUSAO
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        // POSIÇÃO DE ELEMENTOS DOS ITENS
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

        // POSIÇÃO DE ELEMENTOS DO LINK
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
    }

}

renderTodos();

// PEGAR O VALOR E TORNAR UM ITEM
function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";

    renderTodos();
}
console.log(todos);

// COLOCAR A FUNÇÃO DO BOTAO
buttonElement.onclick = addTodo;

// CRIAR FUNÇÃO DE EXCLUSAO
function deleteTodo(pos) {
    todos.splice(pos, 1);

    renderTodos();
}