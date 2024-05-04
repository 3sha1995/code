const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); 
 forms.classList.toggle("show-signup");
})
})
  
  document.addEventListener('DOMContentLoaded', function () {
    const facebookBtn = document.querySelector('.facebook');
    const googleBtn = document.querySelector('.google');

    
    facebookBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const confirmFacebook = confirm("Do you want to continue with Facebook?");
        if (confirmFacebook) {
            
            alert("Your Facebook account has been connected.");
            
            window.location.href = "index.html";
        }
    });

    
    googleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = prompt("Enter your Google email:");
        const password = prompt("Enter your Google password:");
        if (email && password) {
            
            alert("Your Google account has been connected.");
            
            window.location.href = "index.html";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.form.login form');
  const signupForm = document.querySelector('.form.signup form');

  
  loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); 

      

      
      window.location.href = "index.html";
  });

  
  signupForm.addEventListener('submit', function (e) {
      e.preventDefault(); 

      

      
      window.location.href = "index.html";
  });
});
