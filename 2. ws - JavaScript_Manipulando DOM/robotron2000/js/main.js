const plus = document.querySelector('#somar');
const minus = document.querySelector('#subtrair');
const arm = document.querySelector('#braco');

const control = document.querySelectorAll(".controle-ajuste");

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.textContent);
    });
});

function manipulateData (op) {
    if(op === "+") {
        arm.value = Number(arm.value) + 1;
    }
    else{
        arm.value = Number(arm.value) - 1;
    }
}
