import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
});

// You can add interceptors for requests and responses if needed
axiosInstance.interceptors.request.use(
    (config) => {
        // Add any custom headers if needed, like Authorization
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
