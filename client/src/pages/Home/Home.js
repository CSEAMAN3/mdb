import React, { useEffect, useState } from "react";
import "./Home.css";

import axios from "axios";

import Book from "../../components/Book/Book";

export default function Home() {
  useEffect(() => {
    getBooks();
  }, []);

  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const API = "https://mdb-l07m.onrender.com/books";
      const res = await axios.get(API);
      console.log(res.data);
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id, title) {
    try {
      const check = window.confirm(`Are you sure you want to delete ${title}?`);
      if (check) {
        const API = `https://mdb-l07m.onrender.com/books/${id}`;
        await axios.delete(API);
        getBooks();
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="main-home">
      <div className="container main-container">
        {books.map((book) => {
          return <Book key={book._id} book={book} deleteBook={deleteBook} />;
        })}
      </div>
    </main>
  );
}
