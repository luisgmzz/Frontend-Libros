import axios from "axios";

const editBook = (id, newBook) => {
    axios.put(`http://localhost:3001/update/${id}`, newBook);
};

export { editBook };