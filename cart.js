
document.addEventListener('DOMContentLoaded', function () {
  const cartLink = document.getElementById('cart-link');
  const cartContainer = document.getElementById('cartContainer');
  const closeCartBtn = document.querySelector('.cartTab .btn .close');
  const productList = document.getElementById('product-list');
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const totalPriceDisplay = document.querySelector('.total-amount');

  
 
  cartLink.addEventListener('click', function () {
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
  });


  closeCartBtn.addEventListener('click', function () {
    cartContainer.style.display = 'none';
  });

 
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const product = this.parentElement;
      const productName = product.querySelector('.product-name').textContent;
      const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
      const productId = this.dataset.productId;

     
      const existingCartItem = document.querySelector(`.listCart .item[data-product-id="${productId}"]`);
      if (existingCartItem) {
        const quantityInput = existingCartItem.querySelector('.quantity-input');
        const newQuantity = parseInt(quantityInput.value) + 1;
        quantityInput.value = newQuantity;
        updateCartItemTotalPrice(existingCartItem, newQuantity, productPrice);
      } else {
       
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.dataset.productId = productId;
        cartItem.innerHTML = `
          <div class="image">
            <img src="${product.querySelector('.product-image').src}" alt="">
          </div>
          <div class="name">${productName}</div>
          <div class="totalPrice">$${productPrice.toFixed(2)}</div>
          <div class="quantity">
            <input type="number" class="quantity-input" value="1" min="1">
          </div>
          <button class="remove-item">Remove</button
        `;
        document.querySelector('.listCart').appendChild(cartItem);

        
        const removeButton = cartItem.querySelector('.remove-item');
        removeButton.addEventListener('click', function () {
          cartItem.remove();
          updateTotalPrice();
        });

      
        const quantityInput = cartItem.querySelector('.quantity-input');
        quantityInput.addEventListener('change', function () {
          const newQuantity = parseInt(this.value);
          updateCartItemTotalPrice(cartItem, newQuantity, productPrice);
        });
      }

      updateTotalPrice();
    });
  });


  function updateCartItemTotalPrice(cartItem, quantity, price) {
    const totalPriceElement = cartItem.querySelector('.totalPrice');
    const totalPrice = quantity * price;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    updateTotalPrice();
  }


  function updateTotalPrice() {
    let totalAmount = 0;
    document.querySelectorAll('.listCart .item').forEach(item => {
      const totalPrice = parseFloat(item.querySelector('.totalPrice').textContent.replace('$', ''));
      totalAmount += totalPrice;
    });
    totalPriceDisplay.textContent = `$${totalAmount.toFixed(2)}`;
  }
});
document.querySelector('.item').style.display = 'none';document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartContainer = document.querySelector('.listCart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          const product = button.parentElement;
          const productName = product.querySelector('p').textContent;
          const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

          const cartItem = document.createElement('div');
          cartItem.classList.add('item');
          cartItem.innerHTML = `
              <div class="productName">${productName}</div>
              <div class="productPrice">$${productPrice.toFixed(2)}</div>
              <button class="remove-item">Remove</button>
          `;
          cartContainer.appendChild(cartItem);

          const removeButton = cartItem.querySelector('.remove-item');
          removeButton.addEventListener('click', function () {
              cartItem.remove();
          });
      });
  });
});

