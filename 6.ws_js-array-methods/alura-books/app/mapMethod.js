function applyDiscount(booksList){
    const discount = 0.2;

    discountedBooks = booksList.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)};
    });

    return discountedBooks;
}
