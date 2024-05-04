const itemsPerPage = 10; 
let currentPage = 1;

function showPage(pageNumber) {
    const productList = document.querySelectorAll('.product-container .product');
    const totalPages = Math.ceil(productList.length / itemsPerPage);

    
    productList.forEach((product, index) => {
        const start = (pageNumber - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        if (index >= start && index < end) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

  
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
            updatePaginationButtons();
        });
        pagination.appendChild(button);
    }

    updatePaginationButtons();
}

function updatePaginationButtons() {
    const paginationButtons = document.querySelectorAll('.pagination button');
    paginationButtons.forEach(button => {
        if (parseInt(button.innerText) === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


showPage(currentPage);