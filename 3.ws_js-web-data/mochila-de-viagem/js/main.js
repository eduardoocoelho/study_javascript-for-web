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

        //Atualizando o array de itens procurando pela posição onde o id do elemento seja igual ao elemento enviado no form
        items[items.findIndex(element => element.id === exist.id)] = currentItem;
    } else{ //Se não existir, cria um novo item 
        currentItem.id = items[items.length - 1] ? (items[items.length - 1]).id + 1 : 0;

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

    //Adiciona o botão retornado pela função "deleteButton" como filho do novo item da lista
    newItem.appendChild(deleteButton(item.id));

    //Adiciona a 'li' criada a lista já existente
    list.appendChild(newItem);
}

//Atualizar um item existente
function updateItem(item){
    //Atualiza o HTML selecionando o data-attribute ID 
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantity;
}

//Criar um botão para remover itens da lista
function deleteButton(id){
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "X";

    buttonElement.addEventListener("click", function() {
        deleteItem(this.parentNode, id);
    })

    return buttonElement;
}

//Remover um item da lista
function deleteItem(item, id) {
    item.remove();

    //Remove o item no array procura a posição do elemento com o mesmo ID
    items.splice(items.findIndex(element => element.id === id), 1);

    localStorage.setItem("items", JSON.stringify(items));
}
