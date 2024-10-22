import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import FollowerTab from '../components/tab/followers-tab';
import FollowingTab from '../components/tab/following-tab';
import { useParams } from 'react-router-dom';
import { IndividualUserResponse, getIndividualUserDetails } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userProfile, setUserProfile] = useState<IndividualUserResponse | null>(null);
  const [activeTab, setActiveTab] = useState<'followers' | 'following'>('followers');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const fetchedProfile = await getIndividualUserDetails(Number(userId)); 
        setUserProfile(fetchedProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUserProfile(null); 
      }
    };

    fetchUserProfile(); 
  }, [userId]);
  const navigate = useNavigate(); 
  return (
    <Layout >
      {userProfile ? (
        <div className="max-w-4xl mx-auto p-8 rounded-md">
           <button
        onClick={() => navigate(-1)} 
        className="flex items-center mb-4 text-primaryBlack hover:text-primaryDark transition"
      >
        
        <MdArrowBack className="mr-2" />
        Back
      </button>
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-6">
            <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">{`${userProfile.user.firstName} ${userProfile.user.lastName}`}</h1>
              <p>{`${userProfile.user.firstName.toLowerCase()}${userProfile.user.lastName.toLowerCase()}`}</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mb-4 text-gray-700">{userProfile?.user?.bio}</p>

          {/* Followers & Following Count */}
          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-xl font-bold">{userProfile.followersCount}</span>
              <p className="text-gray-600">Followers</p>
            </div>
            <div>
              <span className="text-xl font-bold">{userProfile.followingCount}</span>
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
              ? userProfile.followersList.map((follower, index: number) => (
                  <FollowerTab
                    key={index}
                    username={`${follower.firstName.toLowerCase()}${follower.lastName.toLowerCase()}`}
                    firstName={follower.firstName}
                    lastName={follower.lastName}
                    profilePicture={follower.profilePicture || 'https://via.placeholder.com/150'} 
                  />
                ))
              : userProfile.followingList.map((followed, index: number) => (
                  <FollowingTab
                    key={index}
                    username={`${followed.firstName.toLowerCase()}${followed.lastName.toLowerCase()}`}
                    firstName={followed.firstName}
                    lastName={followed.lastName}
                    profilePicture={followed.profilePicture || 'https://via.placeholder.com/150'} 
                  />
                ))}
          </div>
        </div>
      ) : (
        <div className='text-center text-4xl pt-[10%] '> Loading Profile...</div> 
      )}
    </Layout>
  );
};

export default Profile;
