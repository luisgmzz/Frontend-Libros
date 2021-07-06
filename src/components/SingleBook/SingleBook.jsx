import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { getSingleBook } from "../../services/getBooks";

function SingleBook(props) {
  const [book, setBook] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    getSingleBook(id).then(res => {
      setBook(res);
    });
  }, [id]);

  return (
    <div>
      <img src={book.imageurl} alt="Portada del libro" />
      <h1>
        {book.name} - {book.series}
      </h1>
      <p>{book.description}</p>
      <Button>
        <Link to={`/books/edit/${id}`}>Editar libro</Link>
      </Button>
      <Button>
        <Link to="/books/read">{"<-"}</Link>
      </Button>
    </div>
  );
}

export default SingleBook;
