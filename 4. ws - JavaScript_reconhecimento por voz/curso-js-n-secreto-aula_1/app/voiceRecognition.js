window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const guessELement = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    console.log(e.results[0][0].transcript);
    guess = e.results[0][0].transcript;
    showGuess(guess);
}

function showGuess(guess){
    guessELement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${guess}</span>
    `
}
