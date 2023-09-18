import { connectAPI } from "./connectAPI.js";
import buildCard from "./showVideos.js";

async function searchVideo(event){
    event.preventDefault();

    const searchText = document.querySelector("[data-search]").value;
    const search = await connectAPI.search(searchText);

    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)))
}

const searchBtn = document.querySelector("[data-search-btn]");
searchBtn.addEventListener('click', event => searchVideo(event));
