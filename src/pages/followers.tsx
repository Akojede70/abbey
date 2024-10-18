import React from 'react';
import Layout from '../components/layout/layout';

interface Follower {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

const followers: Follower[] = [
  { username: 'johnDoe', firstName: 'John', lastName: 'Doe', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'janeSmith', firstName: 'Jane', lastName: 'Smith', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'aliceWang', firstName: 'Alice', lastName: 'Wang', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'michaelBrown', firstName: 'Michael', lastName: 'Brown', profilePicture: 'https://via.placeholder.com/150' },
];

const Followers: React.FC = () => {
  return (
    <Layout>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Followers</h1>
      <div className="flex flex-col gap-4">
        {followers.map((follower, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow">
            {/* Left Side: Profile Info */}
            <div className="flex items-center gap-4">
              <img src={follower.profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <span className="font-semibold">{`${follower.firstName} ${follower.lastName}`}</span>
                <span className="text-sm text-gray-500">@{follower.username}</span>
              </div>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
                Follow
              </button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Followers;
