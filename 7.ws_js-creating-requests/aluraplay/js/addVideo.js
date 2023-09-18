import { connectAPI } from "./connectAPI.js";

const form = document.querySelector("[data-form]");

async function createVideo(event){
    event.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const img = document.querySelector("[data-img]").value;
    const title = document.querySelector("[data-title]").value;
    const description = Math.floor(Math.random * 10).toString();

    await connectAPI.addVideo(title, description, url, img);

    window.location.href = "../pages/envio-concluido.html"
}

form.addEventListener("submit", event => createVideo(event));
