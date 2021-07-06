import axios from "axios";

const deleteBook = id => {
    axios.delete(`http://localhost:3001/delete/${id}`);
};

export { deleteBook };