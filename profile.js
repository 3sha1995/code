
const purchasedProductsData = [
    {
      name: "'How Sweet' standard ver.",
      image: "newjeans/a1.png",
      price: "$80"
    },
    {
      name: "'Easy' Compact ver.",
      image: "album/l2.png",
      price: "$55"
    }
  ];
 
  
  
  function createProductHTML(product) {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="details">
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    `;
  }
  
  
  function displayPurchasedProducts() {
    const purchasedProductsContainer = document.getElementById("purchasedProducts");
    purchasedProductsData.forEach(product => {
      purchasedProductsContainer.innerHTML += createProductHTML(product);
    });
  }
  
  
  
  
  
  displayPurchasedProducts();
  
  