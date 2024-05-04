
function addProduct() {
    const requiredInputs = document.querySelectorAll('input[required]');
    let isFormValid = true;
    let unfilledInputs = [];

    for (const input of requiredInputs) {
      if (!input.value) {
        isFormValid = false;
        unfilledInputs.push(input);
      }
    }

    if (isFormValid) {
      const summaryContainer = document.createElement('div');
      summaryContainer.classList.add('summaryContainer');

      const summaryHeading = document.createElement('h2');
      summaryHeading.textContent = 'Summary of Inputted Details';
      summaryContainer.appendChild(summaryHeading);

      const formDetails = document.createElement('ul');

      const inputElements = document.querySelectorAll('input');
      inputElements.forEach((input) => {
        const detailItem = document.createElement('li');
        detailItem.textContent = `${input.id}: ${input.value}`;
        formDetails.appendChild(detailItem);
      });

      summaryContainer.appendChild(formDetails);

      const confirmButton = document.createElement('button');
      confirmButton.textContent = 'Confirm';
      confirmButton.addEventListener('click', () => {
        window.location.href = 'Post-management.html';
      });

      summaryContainer.appendChild(confirmButton);

      document.body.appendChild(summaryContainer);
    } else {
      alert('Need to fill up all required details.');

      unfilledInputs.forEach((input) => {
        input.classList.add('error');
      });
    }
  }

  function discardForm() {
    window.location.href = 'Post-management.html';
  }


let productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let requiredIds = ['productName','productDescription','wearType','productCategory' ,'productQuantity','itemWeight', 'itemLength', 'itemBreadth', 'itemWidth', 'productPrice'];

  let test = 0;
  for (var i = 0; i < requiredIds.length; i++) {
    var element = document.getElementById(requiredIds[i]);

    if (element.value == "") {
      test++;
    }
  }

  if(test > 0 ){
    alert("Please fill out all the required information!");
  } else{
    console.log(
      `Description\n\tProduct Name: ${requiredIds[0]}\n\tProduct Description:${requiredIds[1]}\n`+
      `Category\n\tType wear: ${requiredIds[2]}\n\tCategory:${requiredIds[3]}\n`+
      `Inventory\n\tQuantity: ${requiredIds[4]}\n\tProduct Weight:${requiredIds[5]}\n`+
      `\tProduct Length: ${requiredIds[6]}\n\tProduct Breadth:${requiredIds[7]}\n\t`+
      `Product Width: ${requiredIds[8]}\nProduct\n\tProduct Price:${requiredIds[9]}`
    );

    test=0;
  }

});