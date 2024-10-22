import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/layout';
import FollowerCard from '../../components/card/followers-card';
import { User, getloggedinUserConnections, IndividualUserResponse, getLoggedInUserId, followUser, unfollowUser } from '../../api/api'; 
import { toast } from 'react-toastify';

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState<User[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set()); 

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const loggedInUserId = getLoggedInUserId(); 
        if (loggedInUserId) {
          const data: IndividualUserResponse = await getloggedinUserConnections(loggedInUserId);
          setFollowers(data.followersList);
          setFollowedUsers(new Set(data.followingList.map(user => user.id))); 
        } else {
          setError('User not logged in'); 
        }
      } catch (error) {
        setError('Failed to load followers');
      } finally {
        setLoading(false); 
      }
    };

    fetchFollowers();
  }, []);

  const handleFollowClick = async (followerId: number) => {
    const loggedInUserId = getLoggedInUserId(); 
    if (!loggedInUserId) {
      return; 
    }

    const isFollowing = followedUsers.has(followerId); 

    try {
      if (isFollowing) {
        // Unfollow the user
        await unfollowUser({ followerId: loggedInUserId, followingId: followerId }); 
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(followerId); 
          return newSet; 
        });
      } else {
        // Follow the user
        await followUser({ followerId: loggedInUserId, followingId: followerId }); 
        setFollowedUsers(prev => {
          const newSet = new Set(prev);
          newSet.add(followerId); 
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
        <div className='text-2xl text-center pt-[12%]'>Loading followers...</div>
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
        <h1 className="text-xl font-bold mb-4 pt-[5%]">Followers</h1>
        <div className="flex flex-col gap-4">
          {followers.length === 0 ? (
            <p>No followers found.</p>
          ) : (
            followers.map((follower) => (
              <FollowerCard
                key={follower.id}
                username={`${follower.firstName.toLowerCase()}${follower.lastName.toLowerCase()}`} 
                firstName={follower.firstName.charAt(0).toUpperCase() + follower.firstName.slice(1)}
                lastName={follower.lastName.charAt(0).toUpperCase() + follower.lastName.slice(1)}
                profilePicture={follower.profilePicture || 'https://via.placeholder.com/150'} 
                onFollowClick={() => handleFollowClick(follower.id)} 
                onViewProfileClick={() => console.log(`Viewing profile of ${follower.firstName}`)}
                isFollowing={followedUsers.has(follower.id)} 
                userId={follower?.id} 
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Followers;
