function printReceipt() {
    window.print();
}


function addProductRow(productName, quantity, price) {
    var productList = document.getElementById("productList");
    var newRow = productList.insertRow();

    var cell1 = newRow.insertCell(0);
    cell1.textContent = productName;

    var cell2 = newRow.insertCell(1);
    cell2.textContent = quantity;

    var cell3 = newRow.insertCell(2);
    cell3.textContent = "$" + (price * quantity).toFixed(2);

    updateTotalItems(quantity);
    updateTotalAmount(price * quantity);
}



function updateTotalItems(quantity) {
    var totalItemsField = document.getElementById("totalItems");
    var currentTotalItems = parseFloat(totalItemsField.value) || 0;
    totalItemsField.value = currentTotalItems + quantity;
}


function updateTotalAmount(amount) {
    var totalAmountField = document.getElementById("totalAmount");
    var currentTotalAmount = parseFloat(totalAmountField.value) || 0;
    totalAmountField.value = currentTotalAmount + amount;
}

function resetForm() {
    var productList = document.getElementById("productList");
    productList.innerHTML = ""; 

    var totalItemsField = document.getElementById("totalItems");
    totalItemsField.value = 0;

    var totalAmountField = document.getElementById("totalAmount");
    totalAmountField.value = 0;

    
    document.getElementById("customerName").value = "";
    document.getElementById("customerNumber").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("shippingFee").value = 0;
    document.getElementById("paymentMethod").value = "";
}


function addReceipt() {
    resetForm(); 

    var totalProducts = parseInt(prompt("Enter the total number of products:"));
    
    if (isNaN(totalProducts) || totalProducts <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    for (var i = 0; i < totalProducts; i++) {
        var productName = prompt("Enter the name of product " + (i + 1) + ":");
        var quantity = parseInt(prompt("Enter the quantity for product " + productName + ":"));
        var price = parseFloat(prompt("Enter the price for product " + productName + ":"));

        if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
            alert("Please enter valid quantity and price for product " + productName + ".");
            return;
        }

        addProductRow(productName, quantity, price);
    }
}
function addReceipt() {
    resetForm(); 

    var totalProducts = parseInt(prompt("Enter the total number of products:"));
    
    if (isNaN(totalProducts) || totalProducts <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    
    var region = prompt("Enter customer region (Luzon, Visayas, or Mindanao):");
    var shippingFee = 0;

    
    if (region.toLowerCase() === "luzon") {
        shippingFee = 23;
    } else if (region.toLowerCase() === "visayas") {
        shippingFee = 57;
    } else if (region.toLowerCase() === "mindanao") {
        shippingFee = 125;
    } else {
        alert("Invalid region entered.");
        return;
    }

    
    document.getElementById("shippingFee").value = shippingFee;

    for (var i = 0; i < totalProducts; i++) {
        var productName = prompt("Enter the name of product " + (i + 1) + ":");
        var quantity = parseInt(prompt("Enter the quantity for product " + productName + ":"));
        var price = parseFloat(prompt("Enter the price for product " + productName + ":"));

        if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
            alert("Please enter valid quantity and price for product " + productName + ".");
            return;
        }

        addProductRow(productName, quantity, price);
    }
}
function addReceipt() {
    resetForm(); 

    var totalProducts = parseInt(prompt("Enter the total number of products:"));
    
    if (isNaN(totalProducts) || totalProducts <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    
    var region = prompt("Enter customer region (Luzon, Visayas, or Mindanao):");
    var shippingFee = 0;

    
    if (region.toLowerCase() === "luzon") {
        shippingFee = 23;
    } else if (region.toLowerCase() === "visayas") {
        shippingFee = 57;
    } else if (region.toLowerCase() === "mindanao") {
        shippingFee = 125;
    } else {
        alert("Invalid region entered.");
        return;
    }

    
    document.getElementById("shippingFee").value = shippingFee;

    
    var paymentMethod = prompt("Enter payment method (GCash, Card, Cash on Delivery):");

    
    document.getElementById("paymentMethod").value = paymentMethod;

    for (var i = 0; i < totalProducts; i++) {
        var productName = prompt("Enter the name of product " + (i + 1) + ":");
        var quantity = parseInt(prompt("Enter the quantity for product " + productName + ":"));
        var price = parseFloat(prompt("Enter the price for product " + productName + ":"));

        if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
            alert("Please enter valid quantity and price for product " + productName + ".");
            return;
        }

        addProductRow(productName, quantity, price);
    }
}
function editReceipt() {
    
    var totalProducts = parseInt(prompt("Edit total number of products:"));

    
    if (isNaN(totalProducts) || totalProducts <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    
    var productList = document.getElementById("productList");
    productList.innerHTML = "";

    
    for (var i = 0; i < totalProducts; i++) {
        var productName = prompt("Edit the name of product " + (i + 1) + ":");
        var quantity = parseInt(prompt("Edit the quantity for product " + productName + ":"));
        var price = parseFloat(prompt("Edit the price for product " + productName + ":"));

        
        if (isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0) {
            alert("Please enter valid quantity and price for product " + productName + ".");
            return;
        }

        
        addProductRow(productName, quantity, price);
    }

    
    var editedShippingFee = prompt("Edit shipping fee:");

    
    if (isNaN(editedShippingFee) || editedShippingFee <= 0) {
        alert("Please enter a valid shipping fee greater than 0.");
        return;
    }

    
    var editedPaymentMethod = prompt("Edit payment method:");

    
    document.getElementById("shippingFee").value = editedShippingFee;
    document.getElementById("paymentMethod").value = editedPaymentMethod;
}
