
import React from 'react';
import Layout from '../components/layout/layout';

interface Following {
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string; 
}

const following: Following[] = [
  { username: 'samGreen', firstName: 'Sam', lastName: 'Green', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'lindaWhite', firstName: 'Linda', lastName: 'White', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'charlieBlack', firstName: 'Charlie', lastName: 'Black', profilePicture: 'https://via.placeholder.com/150' },
  { username: 'jessicaBlue', firstName: 'Jessica', lastName: 'Blue', profilePicture: 'https://via.placeholder.com/150' },
];

const FollowingList: React.FC = () => {
  return (
    <Layout>
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Following</h1>
      <div className="flex flex-col gap-4">
        {following.map((person, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow">
            {/* Left Side: Profile Info */}
            <div className="flex items-center gap-4">
              <img src={person.profilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <span className="font-semibold">{`${person.firstName} ${person.lastName}`}</span>
                <span className="text-sm text-gray-500">@{person.username}</span>
              </div>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex gap-2">
              <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800">
                Unfollow
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800">
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

export default FollowingList;

