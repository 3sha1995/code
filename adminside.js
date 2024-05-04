document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('add-product-form');
    const productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    let editMode = false;
    let editedRow;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = form.elements['product-name'].value;
        const productPrice = form.elements['product-price'].value;
        const productStock = form.elements['product-stock'].value;
        const productImage = form.elements['product-image'].files[0];

        if (!productName || !productPrice || !productStock || !productImage) {
            alert('Please fill in all fields.');
            return;
        }

        if (editMode) {
          
            editedRow.cells[0].innerHTML = `<img src="${URL.createObjectURL(productImage)}" width="100" height="100">`;
            editedRow.cells[1].textContent = productName;
            editedRow.cells[2].textContent = '$' + productPrice;
            editedRow.cells[3].textContent = productStock;
            editMode = false;
            editedRow = null;
        } else {
          
            const newRow = productTable.insertRow();
            const cellImage = newRow.insertCell(0);
            const cellName = newRow.insertCell(1);
            const cellPrice = newRow.insertCell(2);
            const cellStock = newRow.insertCell(3);
            const cellAction = newRow.insertCell(4);

            const image = document.createElement('img');
            image.src = URL.createObjectURL(productImage);
            image.width = 100;
            image.height = 100;
            cellImage.appendChild(image);

            cellName.textContent = productName;
            cellPrice.textContent = '$' + productPrice;
            cellStock.textContent = productStock;
            cellAction.innerHTML = '<button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>';
        }

        form.reset();
    });

    productTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('edit-btn')) {
          
            const row = event.target.closest('tr');
            const productName = row.cells[1].textContent;
            const productPrice = row.cells[2].textContent.slice(1); 
            const productStock = row.cells[3].textContent;
            form.elements['product-name'].value = productName;
            form.elements['product-price'].value = productPrice;
            form.elements['product-stock'].value = productStock;
            editMode = true;
            editedRow = row;
        }
    });
});
document.getElementById("open-product-form").addEventListener("click", function() {
    var productForm = document.querySelector(".product-form");
    if (productForm.style.display === "none") {
        productForm.style.display = "block";
    } else {
        productForm.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('add-product-form');
    const productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    let editMode = false;
    let editedRow;

  

    productTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('edit-btn')) {
        
            const row = event.target.closest('tr');
            const productName = row.cells[1].textContent;
            const productPrice = row.cells[2].textContent.slice(1); 
            const productStock = row.cells[3].textContent;
            form.elements['product-name'].value = productName;
            form.elements['product-price'].value = productPrice;
            form.elements['product-stock'].value = productStock;
            editMode = true;
            editedRow = row;
        } else if (event.target.classList.contains('remove-product-btn')) {
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('edit-product-btn')) {
          
        }
    });
});
