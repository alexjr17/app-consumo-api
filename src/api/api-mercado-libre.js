import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    withCredentials: false
});

export default instance;