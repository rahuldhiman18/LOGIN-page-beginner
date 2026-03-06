document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm"); 

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // validation
    if (!email) {
      emailError.textContent = "Email is required";
      return;
    }
    if (!password) {
      passwordError.textContent = "Password is required";
      return;
    }

    try {
      const response = await fetch("http://localhost:2000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save token/session
        localStorage.setItem("authToken", data.token || "dummyToken");
        alert("Login successful!");

        // Redirect to dashboard
        window.location.href = "dashboard.html";
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  });

  // Auto-check if already logged in
  const token = localStorage.getItem("authToken");
  if (token) {
    console.log("Already logged in with token:", token);
    // Redirect automatically if token exists
    window.location.href = "dashboard.html";
  }
});
