const express = require("express");
const axios = require("axios");
import connection from "./db";
const app = express();

insertBook = function () {
  const bookData = { title: "booktitle", author: "book Author" };
  axios.post("/books", (req, res) => {
    const query =
      "INSTER INTO books (title , author, pages, publisher, published_at) VALUES (?,?,?,?)";
  });
};

getAllBooks = function () {
  axios.get("/books", (req, res) => {
    const qurey = "SELECT * FROM books";
  });
};

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
