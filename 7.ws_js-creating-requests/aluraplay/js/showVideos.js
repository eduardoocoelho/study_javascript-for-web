import { connectAPI } from "./connectAPI.js";

const list = document.querySelector('[data-list]');

export default function buildCard(title, description, url, image) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${image}" alt="logo canal alura">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>
    `

    return video;
}

async function videosList(){
    try{
        const listAPI = await connectAPI.connect();

        listAPI.forEach(element => list.appendChild(
            buildCard(element.titulo, element.descricao, element.url, element.imagem)
        ));
    } catch{
        list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar os vídeos</h2>`
    }
}

videosList();
