import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = "40592649-5a584918a00e9f3e55eacb768";

export const fetchQuery = async (requestValue, page) => {
    const response = await axios.get(`?q=${requestValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data;
};