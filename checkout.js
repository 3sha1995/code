const customerForm = document.getElementById('customer-form');
const shippingForm = document.getElementById('shipping-form');
const payButton = document.querySelector('button[type="submit"]');

customerForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  validateForm(customerForm); 
});

shippingForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  validateForm(shippingForm); 
});

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required]');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error'); 
    } else {
      input.classList.remove('error'); 
    }
  }

  if (isValid) {
    payButton.disabled = false; 
  } else {
    payButton.disabled = true; 
  }
}

