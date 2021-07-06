import axios from "axios";

const createBook = book => {
    axios.post("http://localhost:3001/create", book);
};

export { createBook };