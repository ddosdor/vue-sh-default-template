import axios from 'axios';
import { authInterceptor, errorHandlerInterceptor } from './interceptors';

const API_HEADERS = {};
const API_CONFIG = {};
const API_TOKEN_STORAGE = sessionStorage;

// SET CONFIGURATION
API_HEADERS['X-Requested-With'] = 'XMLHttpRequest';

API_CONFIG.baseURL = process.env.API_URL;
API_CONFIG.headers = API_HEADERS;
API_CONFIG.timeout = 5000;
API_CONFIG.withCredentials = !process.env.NODE_ENV === 'development';

const API = axios.create(API_CONFIG);

API.interceptors.request.use(authInterceptor, errorHandlerInterceptor);
API.interceptors.response.use(config => config, errorHandlerInterceptor);

// EXPORT CONFIGURATION
export {
  API, API_TOKEN_STORAGE,
};
