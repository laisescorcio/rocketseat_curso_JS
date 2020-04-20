// AULA proposta: Remover o To-Do, excluir ele da lista

var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  "Fazer café",
  "Estudar Javascript",
  "Acessar comunidade da Rocketseat"
];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    // CRIAR ELEMENTO QUE SERÁ O LINK PARA EXCLUIR O ITEM
    // criar elemento
    var linkElement = document.createElement('a');
    // Para se tornar link clicável
    linkElement.setAttribute('href', '#');

    // Retorna a posição do array em que o valor ta
    var pos = todos.indexOf(todo);
    //Criar um atributo dentro da tag li, entao o onclick é o atributo e o valor é a função deleteTodo()
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    // definir o texto do link
    var linkText = document.createTextNode(" Excluir");
    // o texto criado será filho da tag 'a'
    linkElement.appendChild(linkText);


    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
    // colocar o link no final da tag 'li'
    todoElement.appendChild(linkElement);
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

// Para saber qual vai ser o to-do excluído, usa-se a posição do array [0, 1, 2]
function deleteTodo(pos) {
  // Splice: remove quantidade de itens do arrays baseado na posição que irá ser passado
  todos.splice(pos, 1);
  // se clicar na posição 0, ou seja, todos.splice(0, 1), ele irá na posicao 0 remover 1 item

  // Para renderizar a lista atualizada
  renderTodos();
}
