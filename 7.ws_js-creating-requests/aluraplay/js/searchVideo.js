import { connectAPI } from "./connectAPI.js";

async function searchVideo(event){
    event.preventDefault();

    const searchText = document.querySelector("[data-search]").value;
    const search = await connectAPI.search(searchText);

    //console.log(search);
}

const searchBtn = document.querySelector("[data-search-btn]");
searchBtn.addEventListener('click', event => searchVideo(event));
