import { JSX } from 'react/jsx-runtime';
import { ReactNode } from "react";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing,  SlUserFollow } from "react-icons/sl";

interface Path {
    id: number;
    icon: JSX.Element;
    name: ReactNode;
    path: string;
}

const paths: Path[] = [
    {
        id: 1,
        icon: (
            <FaUsers className='text-primaryLightGray'/>
        ),
        name: "Users",
        path: '/',
    },
    {
        id: 2,
        icon: (
            <SlUserFollow  className='text-primaryLightGray'/>
        ),
        name: "Followers",
        path: '/followers',
    },
    {
        id: 3,
        icon: (
            <SlUserFollowing  className='text-primaryLightGray'/>
        ),
        name: "Following",
        path: '/following',
    },
    {
        id: 4,
        icon: (
            <CgProfile   className='text-primaryLightGray'/>
        ),
        name: "Profile",
        path: '/profile',
    },
];

export default paths;
