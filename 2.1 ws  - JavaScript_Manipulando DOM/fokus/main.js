const html = document.querySelector('html');
const focusBt = document.querySelector('.app__card-button--foco');
const shortBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const musicInput = document.querySelector('#alternar-musica');
const startPauseBt = document.querySelector('#start-pause')
const music = new Audio('sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('sons/play.wav');
const audioPause = new Audio('sons/pause.mp3');
const audioFinished = new Audio('sons/beep.mp3');

let runtimeSec = 5
let intervalId = null

music.loop = true;

musicInput.addEventListener('change', () => {
    music.currentTime = 0;
    if(music.paused){
        music.play();
    }
    else{
        music.pause();
    }
});

focusBt.addEventListener('click', () => {
    changeAttribute('foco');
    focusBt.classList.add('active');
});

shortBt.addEventListener('click', () => {
    changeAttribute('descanso-curto');
    shortBt.classList.add('active');
});

longBt.addEventListener('click', () => {
    changeAttribute('descanso-longo');
    longBt.classList.add('active');
});

function changeAttribute(value) {
    buttons.forEach(function (value){
        value.classList.remove('active');
    });

    html.setAttribute('data-contexto', value);
    banner.setAttribute('src', `imagens/${value}.png`);

    switch (value) {
        case 'foco':
            title.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;
        case 'descanso-curto':
            title.innerHTML = `
            Que tal dar uma respirada?<br> 
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            
            break;
        case 'descanso-longo':
            title.innerHTML = `
            Hora de voltar à superfície.<br> 
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    }
}

const countdown = () => {
    if(runtimeSec <= 0){
        audioFinished.play();
        alert('Tempo finalizado!');
        reset();
        return;
    }
    runtimeSec -= 1;
    console.log('Temporizador: ' + runtimeSec);
}

startPauseBt.addEventListener('click', playOrPause);

function playOrPause() {
    if(intervalId){
        audioPause.play();
        reset();
        return;
    }
    audioPlay.play();
    intervalId = setInterval(countdown, 1000);
}

function reset() {
    clearInterval(intervalId);
    intervalId = null;
}
