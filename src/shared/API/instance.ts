import axios from 'axios';
import { NODE_ENV } from '$env/static/private';

export const axiosInstance = axios.create({
  baseURL:
    NODE_ENV == 'prod' ? 'http://localhost:5000' : 'https://localhost:5001/',
  headers: {}
});
