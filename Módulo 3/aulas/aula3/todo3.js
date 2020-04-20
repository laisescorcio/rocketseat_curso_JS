// AULA proposta: Funcionalidade de adicionar um novo to-do
// 1) ouvir o clique no botao adicionar
// 2) recuperar o valor no input
// 3) adicionar como novo item no array de to-dos
// 4) renderizar os itens em tela com a função renderTodos()



// Primeiro referencia a lista (ul)
var listElement = document.querySelector("#app ul");
// Referencia o input
var inputElement = document.querySelector("#app input");
// Referencia o botão
var buttonElement = document.querySelector("#app button");

// Os itens no html estão estáticos, mas eles precisam ser dinamicos para excluir, adicionar etc
var todos = [
  "Fazer café",
  "Estudar Javascript",
  "Acessar comunidade da Rocketseat",
  // Se essa estrutura fosse mais complexa, poderia ser em foma de array de objetos, portanto, pra cada to-do um objeto
  //Exemplo: var todos = [{text: 'Fazer café', propriedades: 1}]
];

//Para renderizar na tela os itens to-do
// Coloca no JS porque futuramente que precisar excluir ou adicionar itens, já tem uma funçao pra isso
function renderTodos() {
  // Tudo o que estiver dentro da ul coloque como vazio, para ele NÃO REPETIR tudo de novo quando adicionar novo item
  listElement.innerHTML = "";
  // For específico pra arrays
  // vai percorrer cada uma das variáveis que está em 'todos'
  // e retornar dentro da variável 'todo'
  for (todo of todos) {
    // criar os elementos
    // criar os itens
    var todoElement = document.createElement('li');
     // criar o text que irá dentro da li. Usar a variável todo porque ela tem o texto de cada todo
    var textElement = document.createTextNode(todo);
    
    // Colocar o texto dentro do li
    todoElement.appendChild(textElement);
    // Colocar o li dentro da ul
    listElement.appendChild(todoElement);

  }
}

// chamar a função automaticamente
renderTodos();

// criar função de adicionar to-do
function addTodo() {
  // Após a função, deve-se primeiro recuperar o valor do input
  var todoText = inputElement.value;
  // Adicionar o valor do input na lista, ou seja, no arrays
  // PUSH: função do array para adicionar um novo item no final dele
  todos.push(todoText);

  // Apagar o texto atual do input
  inputElement.value = "";

  // Chamar a função renderTodos() novamente para ela renderizar a lista de to-dos novamente
  renderTodos();

}

// definir o botão para com o clique chamar a função addTodos()
buttonElement.onclick = addTodo;
