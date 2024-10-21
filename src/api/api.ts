import { jwtDecode } from 'jwt-decode';
import axiosInstance from './axios-Instance';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    profilePicture?: string;
}

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

interface FollowData {
    followingId: number; 
    followerId: number;
}

export interface IndividualUserResponse {
    message?: string;
    user: User;
    bio?:string;
    followersCount: number;
    followersList: User[];
    followingCount: number;
    followingList: User[];
  }
  

  interface GetAllUsersResponse {
    users: User[]; 
}

export const registerUser = async (data: RegisterData) => {
    const response = await axiosInstance.post('/api/v1/auth/register', data);
    if (response.data && response.data.user) {
        const { accessToken, refreshToken } = response.data.user; 
        localStorage.setItem('token', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
        
    }
    return response.data; 
};



export const loginUser = async (data: LoginData) => {
    const response = await axiosInstance.post('/api/v1/auth/login', data);
    if (response.data && response.data.user) {
        const { accessToken, refreshToken } = response.data.user; 
        localStorage.setItem('token', accessToken); 
        localStorage.setItem('refreshToken', refreshToken); 
    }
    
    return response.data; 
};





export const getLoggedInUserId = () => {
    const token = localStorage.getItem('token'); 
    console.log(token)
    if (token) {
        const decodedToken: any = jwtDecode(token); 
        return decodedToken.userId; 
    }
    return null; 
};


export const getloggedinUserConnections = async (userId: number): Promise<IndividualUserResponse> => {
    const response = await axiosInstance.get(`/api/v1/users/${userId}/connection`);
    console.log(response)
    return response.data;
  };

  
export const getAllUsers = async (): Promise<GetAllUsersResponse> => {
    const response = await axiosInstance.get('/api/v1/users');
    return response.data;
};



export const getIndividualUserDetails = async (userId: number): Promise<IndividualUserResponse> => {
    const response = await axiosInstance.get(`/api/v1/users/${userId}`);
    return response.data; 
  };

export const followUser = async (data: FollowData) => {
    const followerId = getLoggedInUserId();
    console.log(followerId)

    return (await axiosInstance.post('/api/v1/users/follow', { 
        followerId, 
        followingId: data.followingId 
    })).data;
};


export const unfollowUser = async (data: { followerId: number; followingId: number }) => {
    return (await axiosInstance.delete('/api/v1/users/unfollow', { data })).data;
};