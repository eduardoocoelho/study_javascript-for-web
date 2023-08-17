function playSound (buttonId) {
    document.querySelector(buttonId).play();
}

const buttonList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < buttonList.length; counter++) {
    //template string
    const sound = `#som_${buttonList[counter].classList[1]}`;

    //anonymous function
    buttonList[counter].onclick = function () {
        playSound(sound);
    }
}
