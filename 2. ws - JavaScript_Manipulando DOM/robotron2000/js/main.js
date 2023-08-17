const control = document.querySelectorAll(".controle-ajuste");

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.textContent, event.target.parentNode);
    });
});

function manipulateData (op, parent) {
    const part = parent.querySelector('.controle-contador');

    if(op === "+") {
        part.value = Number(part.value) + 1;
    }
    else{
        part.value = Number(part.value) - 1;
    }
}
