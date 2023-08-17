const plus = document.querySelector('#somar');
const minus = document.querySelector('#subtrair');
const arm = document.querySelector('#braco');

plus.addEventListener("click", (event) => {
    arm.value = Number(arm.value) + 1;
})

minus.addEventListener("click", (event) => {
    arm.value = Number(arm.value) - 1;
})