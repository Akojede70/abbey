import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import FollowerTab from '../components/tab/followers-tab';
import FollowingTab from '../components/tab/following-tab';

interface UserProfile {
  username: string;
  firstName: string;
  lastName: string;
  bio: string;
  totalFollowers: number;
  totalFollowing: number;
}

const userProfile: UserProfile = {
  username: 'johnDoe',
  firstName: 'John',
  lastName: 'Doe',
  bio: 'Web developer and tech enthusiast. Love building amazing apps and exploring new technologies.',
  totalFollowers: 200,
  totalFollowing: 180,
};

// Static data for followers
const followers = [
  { username: 'janeSmith', firstName: 'Jane', lastName: 'Smith', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'markWhite', firstName: 'Mark', lastName: 'White', profilePicture: 'https://via.placeholder.com/150' },
];

// Static data for following
const following = [
  { username: 'lisaBrown', firstName: 'Lisa', lastName: 'Brown', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'peterParker', firstName: 'Peter', lastName: 'Parker', profilePicture: 'https://via.placeholder.com/150' },
];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'followers' | 'following'>('followers');

  return (
    <Layout>
    <div className="max-w-4xl mx-auto p-6 bg-primaryLightBlue rounded-md ">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-6">
        <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{`${userProfile.firstName} ${userProfile.lastName}`}</h1>
          <p className="text-gray-600">@{userProfile.username}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mb-4 text-gray-700">{userProfile.bio}</p>

      {/* Followers & Following Count */}
      <div className="flex gap-8 mb-6">
        <div>
          <span className="text-xl font-bold">{userProfile.totalFollowers}</span>
          <p className="text-gray-600">Followers</p>
        </div>
        <div>
          <span className="text-xl font-bold">{userProfile.totalFollowing}</span>
          <p className="text-gray-600">Following</p>
        </div>
      </div>

      {/* Tab Section */}
      <div className="border-b mb-4">
        <button
          className={`pb-2 px-4 font-semibold ${activeTab === 'followers' ? 'border-b-2 border-primaryBlue -mb-[2px]' : ''}`}
          onClick={() => setActiveTab('followers')}
        >
          Followers
        </button>
        <button
          className={`pb-2 px-4 font-semibold ${activeTab === 'following' ? 'border-b-2 border-primaryBlue -mb-[2px]' : ''}`}
          onClick={() => setActiveTab('following')}
        >
          Following
        </button>
      </div>

      {/* Followers or Following List */}
      <div className="space-y-4">
        {activeTab === 'followers'
          ? followers.map((follower, index) => (
            <FollowerTab
            key={index}
            username={follower.username}
            firstName={follower.firstName}
            lastName={follower.lastName}
            profilePicture={follower.profilePicture}
          />
            ))
          : following.map((follower, index) => (
            <FollowingTab
            key={index}
            username={follower.username}
            firstName={follower.firstName}
            lastName={follower.lastName}
            profilePicture={follower.profilePicture}
          />
            ))}
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
