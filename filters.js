const itemsPerPage = 10; 
let currentPage = 1;
const productList = document.querySelectorAll('.product-container .product');
let filteredProducts = Array.from(productList); 
let totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

function showPage(pageNumber) {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    
    filteredProducts.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    
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

function filterProducts(category) {
    filteredProducts = Array.from(productList).filter(product => {
        return product.dataset.category === category || category === 'all';
    });

    
    totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    
    currentPage = 1;

    
    showPage(currentPage);
}


const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        
        this.classList.add('active');
        
        
        const category = this.dataset.category;
        
        filterProducts(category);
    });
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


showPage(currentPage);
