import { JSX } from 'react/jsx-runtime';
import { ReactNode } from "react";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing,  SlUserFollow } from "react-icons/sl";
import {
    Bet,
    Community,
    Gamepad,
    Leaderboard,
    Video,
    Tokensidebar,
} from '../../assets/images-icon/';

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
        path: '',
    },
    {
        id: 3,
        icon: (
            <SlUserFollowing  className='text-primaryLightGray'/>
        ),
        name: "Following",
        path: '',
    },
    {
        id: 4,
        icon: (
            <CgProfile   className='text-primaryLightGray'/>
        ),
        name: "Profile",
        path: '',
    },
];

export default paths;
