// AULA proposta: renderizar os itens da lista em tela pelo JS

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
