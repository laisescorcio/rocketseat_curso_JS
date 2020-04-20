var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button')

var todos = ['Arrumar o quarto',
    'Tomar café',
    'Estudar Javascript'
];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {

        var todoElement = document.createElement('li');
        console.log(listElement);
        var textElement = document.createTextNode(todo);

        todoElement.appendChild(textElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

buttonElement.onclick = addTodos;

function addTodos() {

    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";

    renderTodos();

}





// // AULA proposta: Funcionalidade de adicionar um novo to-do
// // 1) ouvir o clique no botao adicionar
// // 2) recuperar o valor no input
// // 3) adicionar como novo item no array de to-dos
// // 4) renderizar os itens em tela com a função renderTodos()