const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(){
    const btn = document.getElementById(this.id);

    let filteredBooks = books.filter(book => book.categoria == btn.value);

    console.table(filteredBooks);
    showBooks(filteredBooks);
}
