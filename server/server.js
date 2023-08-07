const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8070;

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const Book = require("./models/book");
const { response } = require("express");

mongoose.connect(process.env.DATABASE_URL);

const createBook = require("./library/createBook");
const deleteBook = require("./library/deleteBook");
const getBook = require("./library/getBook");
const getBooks = require("./library/getBooks");
const updateBook = require("./library/updateBook");

app.get("/", (request, response) => {
  response.status(200).json("Yo can you even read bro?");
});

// retrieve all books and query param
// app.get("/books", async (request, response) => {
//   try {
//     const books = await Book.find(request.query);
//     response.status(200).json(books);
//   } catch (error) {
//     console.log(error);
//     response.status(500).json(error);
//   }
// });

app.get("/books", getBooks);

// retrieve a specific book using request params
// app.get("/books/:id", async (request, response) => {
//   try {
//     const theBook = await Book.find({ _id: request.params.id });
//     response.status(200).json(theBook);
//   } catch (error) {
//     console.log(error);
//     response.status(500).json(error);
//   }
// });

app.get("/books/:id", getBook);

// Add a new book to the database
// app.post("/books", async (request, response) => {
//   try {
//     const newBook = await Book.create(request.body);
//     response.status(200).json(newBook);
//   } catch (error) {
//     console.log(error);
//     response.status(500).json(error);
//   }
// });

app.post("/books", createBook);

// edit an existing book on the database
// app.put("/books/:id", async (request, response) => {
//   try {
//     const bookToUpdate = await Book.findByIdAndUpdate(request.params.id, request.body);
//     response.status(200).json(bookToUpdate);
//   } catch (error) {
//     console.log(error);
//     response.json(error);
//   }
// });

app.put("/books/:id", updateBook);

// delete a book from the database
// app.delete("/books/:id", async (request, response) => {
//   try {
//     const deletedBook = await Book.findByIdAndDelete(request.params.id);
//     response.status(200).json(deletedBook);
//   } catch (error) {
//     console.log(error);
//     response.status(500).json(error);
//   }
// });

app.delete("/books/:id", deleteBook);

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
