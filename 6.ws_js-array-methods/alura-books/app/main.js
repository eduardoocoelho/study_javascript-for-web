let books = [];
let endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooksFromAPI();

async function getBooksFromAPI(){
    let answer = await fetch(endpointAPI);
    books = await answer.json();

    console.table(books);
}
