import axios from 'axios';
// import {getToken} from './Async';

const baseURL = 'https://examcrush.app/api/api';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
let token
api.interceptors.request.use(
  async config => {
    // const token = (await getToken()) || '';
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default api;