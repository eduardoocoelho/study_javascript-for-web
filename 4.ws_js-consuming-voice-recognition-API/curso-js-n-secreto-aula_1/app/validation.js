function validateGuess(guess){
    const number = +guess;

    if(number < lowestValue || number > higherValue || Number.isNaN(number)){
        guessElement.innerHTML = `Valor inválido! Deve ser um número entre 
        ${lowestValue} e ${higherValue}.`;
        return; 
    }

    if(number === randomNumber){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${number}

        <button id="play-again" class="play-again-button">Jogar novamente</button>
        `;

        const playAgainBtn = document.getElementById('play-again');
        playAgainBtn.addEventListener('click', e => {
            if(e.target.id == 'play-again'){
                window.location.reload();
            }
        });
    }
    else if(number < randomNumber){
        guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
    }
    else{
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
    }
}

