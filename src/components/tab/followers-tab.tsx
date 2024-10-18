import React from 'react';
interface FollowerCardProps {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

const FollowerTab: React.FC<FollowerCardProps> = ({
  username,
  firstName,
  lastName,
  profilePicture,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow">
      <div className="flex items-center gap-4">
        <img src={profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <span className="font-semibold">{`${firstName} ${lastName}`}</span>
          <span className="text-sm text-gray-500">@{username}</span>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
