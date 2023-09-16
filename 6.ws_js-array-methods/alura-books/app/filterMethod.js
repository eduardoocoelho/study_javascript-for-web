const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(){
    const btn = document.getElementById(this.id);

    let filteredBooks = btn.value == 'disponivel' ? 
    filterByAvailability() : filterByType(btn);

    //console.table(filteredBooks);
    showBooks(filteredBooks);

    if(btn.value == 'disponivel'){
        const fullPrice = calculateFullPrice(filteredBooks);
        showFullPrice(fullPrice);
    }
}
function filterByType(btn) {
    return books.filter(book => book.categoria == btn.value);
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function showFullPrice(fullPrice){
    fullPriceElement.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$<span id="valor">${fullPrice.toFixed(2)}</span></p>
        </div>
    `;
}
