import axios from "axios";

const getBooks = () => {
    return axios.get("http://localhost:3001/read").then(res => {
        return res.data;
    });
};

export { getBooks };