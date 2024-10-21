import React from 'react';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';


interface UserCardProps {
  username: string;
  firstName: string;
  lastName: string;
  isFollowing: boolean;
  onFollowClick: () => void;
  onViewProfileClick: () => void;
  userId: number;
}


const UserCard: React.FC<UserCardProps> = ({
  username,
  firstName,
  lastName,
  isFollowing,
  onFollowClick,
  userId,
}) => {
  const navigate = useNavigate();
  
  const onViewProfileClick = () => {
    navigate(`/profile/${userId}`);
  }
  return (
    <div className="bg-[#F7FAFC] p-5 rounded-lg shadow-md w-full h-[150px]">
      <div className=" text-xl font-bold">
        {firstName} {lastName}
      </div>
      <div className="text-primaryLightGray">@{username}</div>
      <div className="flex gap-4 mt-4">
        <Button label={isFollowing ? "Unfollow" : "Follow"} onClick={onFollowClick} className={isFollowing ? "bg-red-500 text-white" : "bg-blue-500 text-white"}/>
        <Button label="View Profile" onClick={onViewProfileClick} />
      </div>
    </div>
  );
};

export default UserCard;
