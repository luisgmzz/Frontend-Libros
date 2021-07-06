import React from "react";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  FormLabel,
} from "@chakra-ui/react";
import { createBook } from "../../services/createBook";
import "./createbook.css";

function CreateBook(props) {
  const placeholders = [
    "Nombre del libro",
    "Serie del libro",
    "Autor del libro",
    "Editorial",
    "Descripción",
    "Url de la foto",
  ];

  const redirectToBook = () =>
    (window.location.href = "http://localhost:3000/books/read");

  const getBook = () => {
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

  const validateInputs = () => {
    const isEmpty = obj => obj.value === "";
    const inputs = Object.values(document.getElementsByClassName("input"));
    if (inputs.some(isEmpty)) return false;
    return true;
  };

  return (
    <FormControl className="FormControl">
      <FormLabel className="label"> Crear Libro </FormLabel>
      <InputGroup className="group">
        {placeholders.map(val => {
          console.log(val);
          return (
            <Input
              width="20rem"
              className="inputs"
              key={val}
              placeholder={val}
              size="lg"
            />
          );
        })}
      </InputGroup>

      <Button
        className="submit"
        colorScheme="teal"
        onClick={() => {
          if (validateInputs()) {
            createBook(getBook());
            redirectToBook();
          } else {
            alert("Rellena todos los campos");
          }
        }}
        size="lg"
      >
        Crear
      </Button>
    </FormControl>
  );
}

export default CreateBook;
