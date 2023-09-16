const sortBtn = document.getElementById('btnOrdenarPorPreco');

sortBtn.addEventListener('click', sortByPrice);

function sortByPrice(){
    let orderedBooks = books.sort((a, b) => a.preco - b.preco);

    showBooks(applyDiscount(orderedBooks));
}
