const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(){
    const btn = document.getElementById(this.id);

    let filteredBooks = btn.value == 'disponivel' ? 
    books.filter(book => book.quantidade > 0) : 
    books.filter(book => book.categoria == btn.value);

    //console.table(filteredBooks);
    showBooks(applyDiscount(filteredBooks));
}
