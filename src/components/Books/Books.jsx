import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { getAllBooks } from "../../services/getBooks";
import Book from "./Book";
import { deleteBook } from "../../services/deleteBook";
import "./books.css";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res));
  }, []);

  const redirectToCreateBook = () =>
    (window.location.href = "http://localhost:3000/books/create");

  if (!books) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <ul>
          {books.map(book => {
            const { id } = book;
            return (
              <li>
                <Book key={id} {...book} />
                <Button
                  size="xs"
                  onClick={() => {
                    deleteBook(id);
                    window.location.reload();
                  }}
                >
                  BORRAR
                </Button>
              </li>
            );
          })}
        </ul>
        <Button colorScheme="telegram" onClick={redirectToCreateBook}>
          +
        </Button>
      </>
    );
  }
}

export default Books;
