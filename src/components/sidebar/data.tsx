import { JSX } from 'react/jsx-runtime';
import { ReactNode } from "react";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { getLoggedInUserId } from '../../api/api';

interface Path {
    id: number;
    icon: JSX.Element;
    name: ReactNode;
    path: string;
}


const generatePaths = (): Path[] => {
    const userId = getLoggedInUserId(); 

    return [
        {
            id: 1,
            icon: (
                <FaUsers className='text-primaryLightGray'/>
            ),
            name: "Users",
            path: '/dashboard',
        },
        {
            id: 2,
            icon: (
                <SlUserFollow className='text-primaryLightGray'/>
            ),
            name: "Followers",
            path: '/followers',
        },
        {
            id: 3,
            icon: (
                <SlUserFollowing className='text-primaryLightGray'/>
            ),
            name: "Following",
            path: '/following',
        },
        {
            id: 4,
            icon: (
                <CgProfile className='text-primaryLightGray'/>
            ),
            name: "Profile",
            path: `/profile/${userId}`, 
        },
    ];
};

const paths = generatePaths(); 

export default paths;
