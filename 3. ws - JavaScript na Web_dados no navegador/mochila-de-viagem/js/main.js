const form = document.getElementById("novoItem");
const list = document.getElementById("list");

//Se tiver "items" no localStorage, será colocado no array
//Se não tiver "items" no localStorage, inicializa um array vazio
//JSON.parse para a string (JSON.stringify()) em objetos
const items = JSON.parse(localStorage.getItem("items")) || [];


//Percorrendo os itens salvos no localStorage ao carregar a página e adicionando os itens na lista
items.forEach( (element) => {
    buildItem(element);
});


//Localiza o evento de submit do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Previne o funcionamento padrão do formulário
    
    const name = event.target.elements['nome'];
    const quantity =  event.target.elements['quantidade'];
    
    //Procura um elemento já existente na lista pelo nome
    const exist = items.find(element => element.name === name.value);

    //Criando um objeto do novo item com os dados passados pelo submit
    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    };

    //Se o item existir, atualiza o ID de identificação e atualiza o item
    if(exist){
        currentItem.id = exist.id;
        updateItem(currentItem);
    } else{ //Se não existir, cria um novo item 
        currentItem.id = items.length;

        buildItem(currentItem);

        //Inserindo o objeto ao final do array (.push)
        items.push(currentItem);
    }

    //Armazenando os dados do novo item no localStorage convertendo os objetos do array para string
    localStorage.setItem("items", JSON.stringify(items));

    //Zerando os campos do formulário após o envio
    name.value = "";
    quantity.value = "";
});


//Criar um novo elemento na lista
function buildItem(item) {
    //Cria o elemento 'li' e adiciona a classe 'item' à esse elemento
    const newItem = document.createElement('li');
    newItem.classList.add("item");

    //Cria o elemento 'strong' que vai dentro da 'li' criada e atribui a quantidade passada por parâmetro
    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantity;
    numberItem.dataset.id = item.id; //Atualiza o ID do valor do item

    //Adiciona o elemento 'strong' criado como filho da 'li' e atribui o nome passado como parâmetro à 'li' como valor
    newItem.appendChild(numberItem);
    newItem.innerHTML += item.name;

    //Adiciona a 'li' criada a lista já existente
    list.appendChild(newItem);
}

function updateItem(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantity;
}