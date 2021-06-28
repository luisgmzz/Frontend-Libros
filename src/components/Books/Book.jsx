import React from "react";

function Book(props) {
  const { id, name, series, author } = props;
  return (
    <li>
      <h2>
        {name} - {series}
      </h2>
      <small>{author}</small>
    </li>
  );
}

export default Book;
