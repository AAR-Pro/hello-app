// hello-backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// 👇 Only start the server when this file is run directly (not during tests)
if (require.main === module) {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

module.exports = app; // 👈 export the app for tests
