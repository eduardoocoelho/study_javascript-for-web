const startCameraBtn = document.querySelector("[data-video-botao]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePhotoBtn = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const msg = document.querySelector("[data-mensagem]");
const sendPhotoBtn = document.querySelector("[data-enviar]")

let imageURL = '';

startCameraBtn.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });

    startCameraBtn.style.display = "none";
    cameraField.style.display = "block";

    video.srcObject = startVideo;
});

takePhotoBtn.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    cameraField.style.display = "none";
    msg.style.display = "block";
});

sendPhotoBtn.addEventListener('click', () => {
    const existingData = localStorage.getItem("cadastro");
    const formattedReturn = JSON.parse(existingData);

    formattedReturn.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(formattedReturn))

    window.location.href = '../pages/abrir-conta-form-3.html';
})
