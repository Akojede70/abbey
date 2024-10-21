import React from 'react';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';

interface FollowerCardProps {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  onFollowClick: () => void;
  onViewProfileClick: () => void;
  isFollowing: boolean; 
  userId: number;
}

const FollowerCard: React.FC<FollowerCardProps> = ({
  username,
  firstName,
  lastName,
  profilePicture,
  onFollowClick,
  isFollowing,
  userId
}) => {
  const navigate = useNavigate();
  
  const onViewProfileClick = () => {
    navigate(`/profile/${userId}`);
  }
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow">
      <div className="flex items-center gap-4">
        <img src={profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <span className="font-semibold">{`${firstName} ${lastName}`}</span>
          <span className="text-sm text-gray-500">@{username}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          label={isFollowing ? "Unfollow" : "Follow"} 
          onClick={onFollowClick} 
          bgColor={isFollowing ? 'bg-red-600' : 'bg-blue-600'} 
          hoverColor={isFollowing ? 'hover:bg-red-800' : 'hover:bg-blue-800'}
        />
        <Button 
          label="View Profile" 
          bgColor='bg-gray-600' 
          hoverColor='hover:bg-gray-800' 
          onClick={onViewProfileClick} 
        />
      </div>
    </div>
  );
};

export default FollowerCard;
