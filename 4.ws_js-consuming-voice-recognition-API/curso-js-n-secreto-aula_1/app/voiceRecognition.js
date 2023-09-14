window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const guessElement = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    console.log(e.results[0][0].transcript);
    guess = e.results[0][0].transcript;
    showGuess(guess);
    validateGuess(guess);
}

function showGuess(guess){
    guessElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
