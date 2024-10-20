import axiosInstance from './axios-Instance';

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    lastName: string;
    firstName: string;
    email: string;
    bio: string;
    password: string;
}

export const loginUser = async (data: LoginData) => {
    const response = await axiosInstance.post('/api/v1/auth/login', data);
    if (response.data && response.data.user) {
        const { accessToken, refreshToken } = response.data.user; 
        localStorage.setItem('token', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
    }
    
    return response.data; 
};

export const registerUser = async (data: RegisterData) => {
    const response = await axiosInstance.post('/api/v1/auth/register', data);
    if (response.data && response.data.user) {
        const { accessToken, refreshToken } = response.data.user; 
        localStorage.setItem('token', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
    }
    return response.data; 
};

export const getAllUsers = async () => {
    const response = await axiosInstance.get('/api/v1/users');
    return response.data;
};
