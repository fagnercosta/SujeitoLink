import axios from 'axios'

export const key = "8724fa299dba45f1974a3ad9d937a1a1ea93eacd";
const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
