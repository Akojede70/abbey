import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/layout';
import FollowerCard from '../../components/card/followers-card';
import { User, getloggedinUserConnections, IndividualUserResponse, getLoggedInUserId, followUser, unfollowUser } from '../../api/api'; 
import { toast } from 'react-toastify';

const Following: React.FC = () => {
  const [following, setFollowing] = useState<User[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set()); 

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const loggedInUserId = getLoggedInUserId(); 
        if (loggedInUserId) {
          const data: IndividualUserResponse = await getloggedinUserConnections(loggedInUserId);
          setFollowing(data.followingList); 
          setFollowedUsers(new Set(data.followingList.map(user => user.id))); 
        } else {
          setError('User not logged in'); 
        }
      } catch (error) {
        setError('Failed to load following');
      } finally {
        setLoading(false); 
      }
    };

    fetchFollowing();
  }, []);

  const handleFollowClick = async (userId: number) => {
    const loggedInUserId = getLoggedInUserId(); 
    if (!loggedInUserId) {
      console.error('User is not logged in.');
      return; 
    }

    const isFollowing = followedUsers.has(userId); 

    try {
      if (isFollowing) {
        // Unfollow the user
        await unfollowUser({ followerId: loggedInUserId, followingId: userId }); 
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(userId); 
          return newSet; 
        });
        // Remove the user from the following list
        setFollowing(prevFollowing => prevFollowing.filter(user => user.id !== userId));
      } else {
        // Follow the user
        await followUser({ followerId: loggedInUserId, followingId: userId }); 
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.add(userId); 
          return newSet; 
        });
      }
    } catch (error:any) {
      toast.error(error.response?.data?.message ||"Something went wrong!");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className='text-2xl text-center pt-[10%]'>Loading People you are following...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 pt-[5%]">Following</h1>
        <div className="flex flex-col gap-4">
          {following.length === 0 ? (
            <p>you haven't followed anyone yet.</p>
          ) : (
            following.map((user) => (
              <FollowerCard
                key={user.id}
                username={`${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`} 
                firstName={user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
                lastName={user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
                profilePicture={user.profilePicture || 'https://via.placeholder.com/150'} 
                onFollowClick={() => handleFollowClick(user.id)} 
                onViewProfileClick={() => console.log(`Viewing profile of ${user.firstName}`)}
                isFollowing={followedUsers.has(user.id)} 
                userId={user?.id} 
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Following;
