const form = document.getElementById("novoItem");
const list = document.getElementById("list");

//Se tiver "items" no localStorage, será colocado no array
//Se não tiver "items" no localStorage, inicializa um array vazio
//JSON.parse para a string (JSON.stringify()) em objetos
const items = JSON.parse(localStorage.getItem("items")) || [];


//Percorrendo os itens salvos no localStorage ao carregar a página e adicionando os itens na lista
items.forEach( (element) => {
    buildElement(element);
});


//Localiza o evento de submit do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Previne o funcionamento padrão do formulário
    
    const name = event.target.elements['nome'];
    const quantity =  event.target.elements['quantidade'];
    
    //Criando um objeto do novo item com os dados passados pelo submit
    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    };

    //Inserindo o objeto ao final do array (.push)
    items.push(currentItem);

    //Armazenando os dados do novo item no localStorage convertendo os objetos do array para string
    localStorage.setItem("items", JSON.stringify(items));

    buildElement(currentItem);

    //Zerando os campos do formulário após o envio
    name.value = "";
    quantity.value = "";
});


//Criar um novo elemento na lista
function buildElement(item) {
    //Cria o elemento 'li' e adiciona a classe 'item' à esse elemento
    const newItem = document.createElement('li');
    newItem.classList.add("item");

    //Cria o elemento 'strong' que vai dentro da 'li' criada e atribui a quantidade passada por parâmetro
    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantity;

    //Adiciona o elemento 'strong' criado como filho da 'li' e adiciona o nome passado como parâmetro à 'li'
    newItem.appendChild(numberItem);
    newItem.innerHTML += item.name;

    //Adiciona a 'li' criada a lista já existente
    list.appendChild(newItem);
}
