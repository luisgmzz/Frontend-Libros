import React from "react";
import { Button } from "@chakra-ui/react";

function Book(props) {
  const { id, name, series, author } = props;
  const redirectToSingleBook = () =>
    (window.location.href = `http://localhost:3000/books/read/${id}`);
  return (
    <li>
      <h2 onClick={redirectToSingleBook}>
        {name} - {series}
      </h2>
      <small>{author}</small>
    </li>
  );
}

export default Book;
