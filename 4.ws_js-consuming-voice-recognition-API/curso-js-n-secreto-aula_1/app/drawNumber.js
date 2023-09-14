const lowestValue = 1;
const higherValue = 1000;
const randomNumber = generateNumber();

function generateNumber(){
    return parseInt(Math.random() * higherValue + 1);
}

console.log("Número: ", randomNumber);

const lowestValueElement = document.getElementById('menor-valor');
lowestValueElement.innerHTML = lowestValue;

const higherValueELement = document.getElementById('maior-valor');
higherValueELement.innerHTML = higherValue;