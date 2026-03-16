document.getElementById("signuppage").addEventListener("submit", async function(e) {
    e.preventDefault();

    // Form values le lenge 
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    try {
        // Backend ko call kr rhe hai
        const response = await fetch("http://localhost:2000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, mobile, password })
        });

        const data = await response.json();

        alert(data.message);

        // signup successfull ho gya to redirect krdega 
        if (data.success) {
            window.location.href = "../login.html";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});