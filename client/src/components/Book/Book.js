import React from "react";
import "./Book.css";

import { Link } from "react-router-dom";

export default function Book({ book, deleteBook }) {
  return (
    <div className="book-container">
      <Link to={`/book/${book._id}`}>
        <p className="book-title bold">{book.title}</p>
      </Link>
      <p className="book-desc">{book.description}</p>
      {book.status ? <p className="avail">Available</p> : <p className="unavail">Unavailable</p>}
      <button className="delete-btn" onClick={() => deleteBook(book._id, book.title)}>
        delete book
      </button>
    </div>
  );
}
