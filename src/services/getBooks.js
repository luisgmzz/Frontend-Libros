import axios from "axios";

const getAllBooks = () => {
    return axios.get("http://localhost:3001/read").then(res => {
        return res.data;
    });
};

const getSingleBook = id => {
    return axios.get(`http://localhost:3001/read/${id}`).then(res => {
        return res.data[0];
    });
};

export { getAllBooks, getSingleBook };