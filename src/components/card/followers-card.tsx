import React from 'react';
import Button from '../button/button';

interface FollowerCardProps {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  onFollowClick: () => void;
  onViewProfileClick: () => void;
}

const FollowerCard: React.FC<FollowerCardProps> = ({
  username,
  firstName,
  lastName,
  profilePicture,
  onFollowClick,
  onViewProfileClick,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow">
      {/* Left Side: Profile Info */}
      <div className="flex items-center gap-4">
        <img src={profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <span className="font-semibold">{`${firstName} ${lastName}`}</span>
          <span className="text-sm text-gray-500">@{username}</span>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex gap-4">
        <Button label="Follow" bgColor='bg-blue-600' hoverColor='hover:bg-blue-800'></Button>
        <Button label="View Profile" bgColor='bg-gray-600' hoverColor='hover:bg-gray-800'></Button>
        {/* <Button label="Follow"></Button>
        <Button label="View Profile"></Button> */}

      </div>
    </div>
  );
};

export default FollowerCard;
