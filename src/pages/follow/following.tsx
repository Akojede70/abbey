import React from 'react';
import Layout from '../../components/layout/layout';
import FollowerCard from '../../components/card/followers-card';
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

const Following: React.FC = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Following</h1>
        <div className="flex flex-col gap-4">
          {followers.map((follower, index) => (
            <FollowerCard
              key={index}
              username={follower.username}
              firstName={follower.firstName}
              lastName={follower.lastName}
              profilePicture={follower.profilePicture}
              onFollowClick={() => console.log(`Followed ${follower.username}`)}
              onViewProfileClick={() => console.log(`Viewing profile of ${follower.username}`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Following;
