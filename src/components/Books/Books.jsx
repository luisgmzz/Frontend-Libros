import React from "react";
import { useState, useEffect } from "react";
import { getBooks } from "../../services/getBooks";
import Book from "./Book";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res));
  });

  if (!books) {
    return <p>Loading</p>;
  } else {
    return (
      <ul>
        {books.map(book => {
          const { id } = book;
          return <Book key={id} {...book} />;
        })}
      </ul>
    );
  }
}

export default Books;
