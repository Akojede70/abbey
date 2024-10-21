import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import UserCard from '../components/card/userscard';
import { getAllUsers, followUser, unfollowUser, getLoggedInUserId, getIndividualUserDetails } from '../api/api'; // Import the new API function

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await getAllUsers(); 
      setUsers(response?.users); 
    } catch (err) {
      setError('Failed to fetch users'); 
    } finally {
      setLoading(false);
    }
  };

  // Fetch the following list for the logged-in user
  const fetchFollowingList = async () => {
    const followerId = getLoggedInUserId(); // Get the logged-in user's ID
    if (!followerId) {
      console.error('User is not logged in.');
      return;
    }
  
    try {
      const { followingList } = await getIndividualUserDetails(followerId); // Fetch the user's following list
      setFollowedUsers(new Set(followingList.map(user => user.id))); 
    } catch (error) {
      console.error('Failed to fetch following list:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); 
    fetchFollowingList(); // Fetch following list on component mount
  }, []);

  const handleFollowClick = async (followingId: number) => {
    const followerId = getLoggedInUserId(); 
    if (!followerId) {
      console.error('User is not logged in.');
      return; // Exit if the user is not logged in
    }

    const isFollowing = followedUsers.has(followingId); 

    try {
      if (isFollowing) {
        // Unfollow the user
        await unfollowUser({ followerId, followingId }); 
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(followingId); 
          return newSet; 
        });
      } else {
        // Follow the user
        await followUser({ followerId, followingId }); // Call follow API with both IDs
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.add(followingId); // Add to the new Set
          return newSet; // Return the new Set to update state
        });
      }
    } catch (error) {
      // console.error('Error while trying to follow/unfollow user:', error.message); // Handle errors
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
        {loading ? (
          <p className="text-3xl text-center">Loading users...</p> 
        ) : error ? (
          <p className="text-primarySemiBlack text-center text-3xl">{error}</p> 
        ) : (
          <div className="flex flex-col gap-6 p-5 max-w-sm mx-auto">
            {users?.map((user) => (
              <UserCard
                key={user.id}
                username={`${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`}
                firstName={user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
                lastName={user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
                isFollowing={followedUsers.has(user.id)} 
                onFollowClick={() => handleFollowClick(user.id)}
                onViewProfileClick={() => console.log(`Viewing profile of ${user.username}`)} 
                userId={user.id} 
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UsersList;
