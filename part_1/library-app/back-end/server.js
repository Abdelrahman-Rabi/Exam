const express = require("express");
const axios = require("axios");
const db = require("connection");
const app = express();

axios.post("/books", (req, res) => {
  const query =
    "INSTER INTO books (title , author, pages, publisher, published_at) VALUES (?,?,?,?)";
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
