const express = require("express");
const cors = require("cors");

const app = express();
const port = 2000;

app.use(express.json());
app.use(cors()); // allow requests from Live Server

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "rd451693@gmail.com" && password === "rahul@123") {
    return res.json({
      success: true,
      message: "Login successful",
      token: "sample-token-123"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
