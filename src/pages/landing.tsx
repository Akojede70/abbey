import React from 'react';
import Layout from '../components/layout/layout';
import UserCard from '../components/card/userscard';
const users = [
  {
    id: 1,
    username: 'johnDoe',
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    username: 'janeDoe',
    firstName: 'Jane',
    lastName: 'Doe',
  },
 
];

const UserList: React.FC = () => {
  return (
    <Layout>
    <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
      {users.map((user) => (
        <UserCard
          key={user.id}
          username={user.username}
          firstName={user.firstName}
          lastName={user.lastName}
          onFollowClick={() => console.log(`Followed ${user.username}`)}
          onViewProfileClick={() => console.log(`Viewing profile of ${user.username}`)}
        />
      ))}
    </div>
    </Layout>
  );
};

export default UserList;
