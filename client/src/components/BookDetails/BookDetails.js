import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function BookDetails() {
  useEffect(() => {
    getBook();
  }, []);

  const { id } = useParams();

  const [book, setBook] = useState({});

  async function getBook() {
    const API = `http://localhost:8070/books?_id=${id}`;
    const res = await axios.get(API);
    console.log(res.data);
    setBook(res.data[0]);
  }

  return (
    <div className="bookdetails-container">
      <div className="inner-bookdetails-container container">
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        {book.status ? <p className="avail">available</p> : <p className="unavail">unavailable</p>}
      </div>
    </div>
  );
}
