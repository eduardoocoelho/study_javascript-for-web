const form = document.getElementById("novoItem");
const list = document.getElementById("list");

//Localiza o evento de submit do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Previne o funcionamento padrão do formulário
    
    const name = event.target.elements['nome'];
    const quant =  event.target.elements['quantidade'];
    
    buildElement(name.value, quant.value);

    //Zerando os campos do formulário após o envio
    name.value = "";
    quant.value = "";
});

//Criar um novo elemento na lista
function buildElement(name, quantity) {
    //Cria o elemento 'li' e adiciona a classe 'item' à esse elemento
    const newItem = document.createElement('li');
    newItem.classList.add("item");

    //Cria o elemento 'strong' que vai dentro da 'li' criada e atribui a quantidade passada por parâmetro
    const numberItem = document.createElement('strong');
    numberItem.innerHTML = quantity;

    //Adiciona o elemento 'strong' criado como filho da 'li' e adiciona o nome passado como parâmetro à 'li'
    newItem.appendChild(numberItem);
    newItem.innerHTML += name;

    //Adiciona a 'li' criada a lista já existente
    list.appendChild(newItem);

    //Armazenando os dados do novo item no localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("quantity", quantity);
}
