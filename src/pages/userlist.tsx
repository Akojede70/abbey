// import React from 'react';
// import Layout from '../components/layout/layout';
// import UserCard from '../components/card/userscard';
// const users = [
//   {
//     id: 1,
//     username: 'johnDoe',
//     firstName: 'John',
//     lastName: 'Doe',
//   },
//   {
//     id: 2,
//     username: 'janeDoe',
//     firstName: 'Jane',
//     lastName: 'Doe',
//   },
 
// ];

// const UserList: React.FC = () => {
//   return (
//     <Layout>
//     <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
//       {users.map((user) => (
//         <UserCard
//           key={user.id}
//           username={user.username}
//           firstName={user.firstName}
//           lastName={user.lastName}
//           onFollowClick={() => console.log(`Followed ${user.username}`)}
//           onViewProfileClick={() => console.log(`Viewing profile of ${user.username}`)}
//         />
//       ))}
//     </div>
//     </Layout>
//   );
// };

// export default UserList;


import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import UserCard from '../components/card/userscard';
import { getAllUsers } from '../api/api';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

 
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers(); 
        setUsers(response?.users); 
        setLoading(false); 
      } catch (err) {
        setError('Failed to fetch users'); 
        setLoading(false);
      }
    };

    useEffect(() => {
    fetchUsers(); 
  }, []);

  
  return (
    <Layout>
      <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
      {loading ? (
        <p className="text-4xl text-center">Loading users...</p> 
      ) : error ? (
        <p className="text-primarySemiBlack text-center text-3xl">{error}</p> 
      ) : (
        <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
          {users?.map((user, id) => (
            
            <UserCard
              key={user.id}
              username={`${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`}
              firstName={user.firstName}
              lastName={user.lastName}
              onFollowClick={() => console.log(`Followed ${user.username}`)}
              onViewProfileClick={() => console.log(`Viewing profile of ${user.username}`)}
            />
          ))}
        </div>
      )}
      </div>
    </Layout>
  );
};

export default UsersList;
