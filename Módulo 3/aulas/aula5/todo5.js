// AULA proposta:  Utilizar o armazenamento local (local Storage) para armazenar os to-dos mesmo atualizando
// Se fosse pro ar, precisaria estar em backend para armazenar

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// Para quando iniciar buscar(PEGAR) os itens atualizados
// JSON.parse para ajeitar a lista 
// pois os dados estão salvos em JSON e agora precisamos voltar eles em array, então, JSON.parse
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// até aqui dá erro, pois 'var todos' ele não é um array, então coloca OU e um array vazio
// Ou seja, se ele não encontrar um valor aceitavel no JSON, ele retorna como vazio

function renderTodos() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function addTodo() {

    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";

    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);

    renderTodos();
    saveToStorage();
}

// As funções que modificam a lista é a de adicionar to-do (addTodo()) e a de excluir to-do (deleteTodo())
//  Então, chama as função que salva esses to-dos no storage

// Pega a lista de to-do e salva no storage
function saveToStorage() {
    // variável localStorage para acessar o storage (global)
    // para setar: setItem. 
    // Primeiro o nome do valor, 
    // segundo o valor que a gente quer setar 

    // o local Storage nao grava vetores, objetos
    // apenas grava uma chave e um valor no formato string
    // Entao precisa converter o array, a lista de to-do numa estrutura que permita gravas os valores
    // Estrutura utilizada: JSON

    // JSON: variável global
    // stringfy: transforma o vetor em string
    localStorage.setItem('list_todos', JSON.stringify(todos));

    // chamar o saveToStorage nas duas funções que alteram a lista: adicionar e excluir

} 
