import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { getSingleBook } from "../../services/getBooks";
import { editBook } from "../../services/editBook";

function EditBook(props) {
  const [book, setBook] = useState({});
  const { id } = props.match.params;

  const placeholders = [
    "Nombre del libro",
    "Serie del libro",
    "Autor del libro",
    "Editorial",
    "Descripción",
    "Url de la foto",
  ];

  useEffect(() => {
    getSingleBook(id).then(res => {
      setBook(res);
    });
  }, [id]);

  const redirectToBook = () =>
    (window.location.href = `http://localhost:3000/books/read/${id}`);

  const getNewBook = () => {
    const inputs = Object.values(document.getElementsByClassName("inputs"));
    return {
      name: inputs[0].value,
      series: inputs[1].value,
      author: inputs[2].value,
      publisher: inputs[3].value,
      description: inputs[4].value,
      imageurl: inputs[5].value,
    };
  };

  return (
    <div>
      <img src={book.imageurl} alt="Portada del libro" />
      <div>
        {Object.values(book).map((val, i) => {
          if (i !== 0) {
            return (
              <input
                className="inputs"
                key={val}
                type="text"
                defaultValue={val}
                placeholder={placeholders[i - 1]}
              />
            );
          }
          return <h1 key="a">Editar libro - </h1>;
        })}
      </div>

      <Button
        colorScheme="teal"
        sixe="lg"
        onClick={() => {
          editBook(book.id, getNewBook());
          redirectToBook();
        }}
      >
        EDITAR
      </Button>
    </div>
  );
}

export default EditBook;
