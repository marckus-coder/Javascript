var listElement = document.querySelector('#app ul'); //criei variável listElement vinculada a lista não ordenada da div app
var inputElement = document.querySelector('#app input'); //criei variável inputElement vinculada ao input da div app
var buttonElement = document.querySelector('#app button'); //criei variável btnElement vinculada ao botão Adicionar da div app

var todos = ['Fazer Café','Estudar Javascript','Acessar Rocketseat']; //array ou vetor de 'to do' 

function renderTodos() { //fução de renderização de 'to do'
    for (todo of todos) { //apliquei o 'for...of' para percorrer o array acima, criando a variável todo 
        var todoElement = document.createElement('li'); //criei var todoElement que cria elementos dentro da ul
        var todoText = document.createTextNode(todo);//todos os elementos todo(criados na lista) serão armazenados em todoText
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();