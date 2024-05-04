document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.getElementById("cart-link");
    const cartContainer = document.getElementById("cartContainer");

    cartLink.addEventListener("click", function (event) {
        event.preventDefault();
        cartContainer.style.display = (cartContainer.style.display === "block") ? "none" : "block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    function updateTotalAmount() {
        let totalAmount = 0;
        const items = document.querySelectorAll(".item");
        items.forEach(function (item) {
            const priceElement = item.querySelector(".totalPrice");
            const quantityElement = item.querySelector(".quantity span");
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = parseInt(quantityElement.innerText);
            totalAmount += price * quantity;
        });
        const totalAmountElement = document.querySelector(".total-amount");
        totalAmountElement.innerText = "$" + totalAmount.toFixed(2);
    }

    
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const product = button.parentElement;
            const productName = product.querySelector(".product-name").innerText;
            const productPrice = product.querySelector(".product-price").innerText;

            
            const newItem = document.createElement("div");
            newItem.classList.add("item");
            newItem.innerHTML = `
                <div class="image">
                    <img src="${product.querySelector(".product-image").src}" alt="${productName}">
                </div>
                <div class="name">${productName}</div>
                <div class="totalPrice">${productPrice}</div>
                <div class="quantity">
                <input type="number" class="quantity-input" value="1" min="1">
            </div>
                <button class="remove">Remove</button>
            `;

            
            const cartList = document.querySelector(".listCart");
            cartList.appendChild(newItem);

            
            updateTotalAmount();
        });
    });

    
    const closeCartButton = document.querySelector(".cartTab .close");
    closeCartButton.addEventListener("click", function () {
        const cartContainer = document.getElementById("cartContainer");
        cartContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const removeButtons = document.querySelectorAll(".remove ");
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.parentElement.remove(); 
            updateTotalAmount(); 
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const product = button.parentElement;
            const productName = product.querySelector(".product-name").innerText;
            const productPrice = parseFloat(product.querySelector(".product-price").innerText.replace("$", ""));
            const productImage = product.querySelector(".product-image").src;

            
            const newItem = document.createElement("div");
            newItem.classList.add("item");
            newItem.innerHTML = `
                <div class="image">
                    <img src="${productImage}" alt="${productName}">
                </div>
                <div class="name">${productName}</div>
                <div class="totalPrice">$${productPrice.toFixed(2)}</div>
                <div class="quantity">
                    <input type="number" class="quantity-input" value="1" min="1">
                </div>
                <button class="remove">Remove</button>
            `;

            
            const cartList = document.querySelector(".listCart");
            cartList.appendChild(newItem);

            
            updateTotalAmount();
        });
    });

    
    document.addEventListener("input", function (event) {
        if (event.target && event.target.classList.contains("quantity-input")) {
            updateTotalAmount(); 
        }
    });


    
    function updateTotalAmount() {
        let totalAmount = 0;
        const items = document.querySelectorAll(".item");
        items.forEach(function (item) {
            const priceElement = item.querySelector(".totalPrice");
            const quantityInput = item.querySelector(".quantity-input");
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = parseInt(quantityInput.value);
            totalAmount += price * quantity;
        });
        const totalAmountElement = document.querySelector(".total-amount");
        totalAmountElement.innerText = "$" + totalAmount.toFixed(2);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.getElementById("cart-link");
    const cartContainer = document.getElementById("cartContainer");

    cartLink.addEventListener("click", function (event) {
        event.preventDefault();
        cartContainer.style.display = (cartContainer.style.display === "block") ? "none" : "block";
    });

    
    const closeCartButton = document.querySelector(".close");
    closeCartButton.addEventListener("click", function () {
        cartContainer.style.display = "none";
    });
});


    
    function updateTotalAmount() {
        let totalAmount = 0;
        const items = document.querySelectorAll(".item");
        items.forEach(function (item) {
            const priceElement = item.querySelector(".totalPrice");
            const quantityElement = item.querySelector(".quantity span");
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = parseInt(quantityElement.innerText);
            totalAmount += price * quantity;
        });
        const totalAmountElement = document.querySelector(".total-amount");
        totalAmountElement.innerText = "$" + totalAmount.toFixed(2);
    }
});
