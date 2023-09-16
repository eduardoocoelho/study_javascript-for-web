let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooksFromAPI();

async function getBooksFromAPI(){
    const answer = await fetch(endpointAPI);
    books = await answer.json();

    console.table(books);

    let discountedBooks = applyDiscount(books);
    showBooks(discountedBooks);
    //showBooks(books);
}
