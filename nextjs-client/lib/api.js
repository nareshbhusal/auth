import axios from 'axios';
axios.defaults.withCredentials = true;
const { BASE_URL } = process.env;

const api= axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: { crossDomain: true, 'Content-Type': 'application/json' },
})
api.defaults.withCredentials = true

export default api;

