let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const booksElement = document.getElementById('livros');

getBooksFromAPI();

async function getBooksFromAPI(){
    const answer = await fetch(endpointAPI);
    books = await answer.json();

    console.table(books);

    showBooks(books);
}

function showBooks(booksList){
    booksList.forEach(book => {
        booksElement.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${book.imagem}" 
        alt="${book.alt}" />
        <h2 class="livro__titulo">${book.titulo}</h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco}</p>
        <div class="tags">
            <span class="tag">${book.categoria}</span>
        </div>
        </div>
        `
    });
}
