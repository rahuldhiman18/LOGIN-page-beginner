const express = require("express");
const cors = require("cors");

const app = express();
const port = 2000;

app.use(express.json());
app.use(cors()); // request krne k liye for live server 

let users = [];

// signup route hai humra hai jo hum banya hai signu k liye
app.post("/signup", (req, res) => {
  const { email, mobile, password } = req.body;

  // Check krte hai already exist hai ya nhi 
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  // new user save kr liye 
  users.push({ email, mobile, password });

  return res.json({
    success: true,
    message: "Signup successful",
    token: "signup-token-" + Date.now()
  });
});

// Login route jo hum login k liya bnaya hai 
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return res.json({
      success: true,
      message: "Login successful",
      token: "login-token-" + Date.now()
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

// server start krne k liye
app.listen(port, () => {
  console.log("Server running on port", port);
});