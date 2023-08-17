const control = document.querySelectorAll("[data-control]");
const stats = document.querySelectorAll("[data-stat]");

const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.control, event.target.parentNode);
        updateStats(event.target.dataset.part);
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

function updateStats(part) {
    stats.forEach( (element) => {
        element.textContent = Number(element.textContent) + parts[part] [element.dataset.stat];
    });
}
