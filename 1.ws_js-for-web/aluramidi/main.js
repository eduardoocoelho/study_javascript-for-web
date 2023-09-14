function playSound (audioId) {
    const audio = document.querySelector(audioId);

    if(audio != null && audio.localName === 'audio'){
        audio.play();
    }
    else{
        console.log('Element not found.')
    }
}

const buttonList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < buttonList.length; counter++) {

    //reuse the same code
    const key = buttonList[counter];

    //template string
    const sound = `#som_${key.classList[1]}`;

    //anonymous function
    key.onclick = function () {
        playSound(sound);
    }

    //press key
    key.onkeydown = function (event) {
        if(event.code === "Enter" || event.code === "Space"){
            key.classList.add('ativa');
        }
    }

    //release key
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}
