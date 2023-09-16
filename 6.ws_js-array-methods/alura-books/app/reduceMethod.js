function calculateFullPrice(books){
    return books.reduce((acc, book) => acc + book.preco, 0);
}
