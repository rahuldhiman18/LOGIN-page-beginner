document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm"); 

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    
    // error elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // validation example
    if (emailInput === "") {
      emailError.textContent = "Email is required";
    }
    if (passwordInput === "") {
      passwordError.textContent = "Password is required";
    }

    // log values
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
  });
});
