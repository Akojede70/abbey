import React from 'react';
import Button from '../button/button';

interface UserCardProps {
  username: string;
  firstName: string;
  lastName: string;
  onFollowClick: () => void;
  onViewProfileClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  username,
  firstName,
  lastName,
  onFollowClick,
  onViewProfileClick,
}) => {
  return (
    <div className="bg-[#F7FAFC] p-5 rounded-lg shadow-md w-full h-[150px]">
      <div className="text-xl font-bold">@{username}</div>
      <div className="text-primaryLightGray">
        {firstName} {lastName}
      </div>
      <div className="flex gap-4 mt-4">
        <Button label="Follow" onClick={onFollowClick} />
        <Button label="View Profile" onClick={onViewProfileClick} />
      </div>
    </div>
  );
};

export default UserCard;
