const dropDownBtn = document.querySelector('.dropbtn');
const dropDownContent = document.getElementById('dropdownuserContent');

dropDownBtn.addEventListener('click', function() {
  dropDownContent.classList.toggle('show'); 
});


document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdownuser-content')) {
    dropDownContent.classList.remove('show');
  }
});
