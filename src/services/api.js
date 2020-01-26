import axios from 'axios';

const api = axios.create({
    baseURL: 'https://danielneris-tindev-backend.herokuapp.com'
});

export default api;
