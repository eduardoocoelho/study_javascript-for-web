const control = document.querySelectorAll("[data-control]");

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.control, event.target.parentNode);
    });
});

function manipulateData (op, parent) {
    const part = parent.querySelector('[data-counter]');

    if(op === "+") {
        part.value = Number(part.value) + 1;
    }
    else{
        part.value = Number(part.value) - 1;
    }
}
