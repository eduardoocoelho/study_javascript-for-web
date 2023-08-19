const form = document.getElementById("novoItem");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildElement(event.target.elements['nome'].value, event.target.elements['quantidade'].value)
});

function buildElement(name, quantity){
    const newItem = document.createElement('li');
    newItem.classList.add("item");
    console.log(newItem);

    const numberItem = document.createElement('strong');
    numberItem.innerHTML = quantity;

    newItem.appendChild(numberItem);
    newItem.innerHTML += name;

    list.appendChild(newItem);
}
