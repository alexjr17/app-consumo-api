import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});
instance.interceptors.request.use( request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

export default instance;