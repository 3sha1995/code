function filterProducts(category) {
    
    const products = document.querySelectorAll('.product');
    
    
    products.forEach(product => {
        
        if (product.dataset.category === category || category === 'all') {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
}


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        
        this.classList.add('active');
        
        
        const category = this.dataset.category;
        
        filterProducts(category);
    });
});
