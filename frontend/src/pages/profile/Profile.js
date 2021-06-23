import './profile.css';
import Header from './../../components/header/Header';
import FollowingBar from './../../components/followingbar/FollowingBar';
import Feed from './../../components/feed/Feed';
import ProfileInfo from './../../components/profileinfo/ProfileInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import logger from '../../utils/logger';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/users?username=${username}`);
        setUser(response.data);
      } catch (error) {
        logger.error(error);
      }
    }
    getUser();
  }, [username]);

  return (
    <>
      <Header isHomepage={false} username={username} />
      <div className="profile">
        <FollowingBar user={user}/>
        <div className="profileRight">
            <div className="profileCover">
              <img className="profileCoverPic" src={user.coverPicture ? PF + user.coverPicture : PF + '/user/defaultCover.png'} alt=""/>
              <img className="profileProPic" src={user.profilePicture ? PF + user.profilePicture : PF + '/user/defaultAvatar.jpg'} alt=""/>
            </div>
            <div className="profileInfo">
              <a href="#top">
                <h4 className="profileInfoName">{user.username}</h4>
              </a>
              <span className="profileInfoBio">{user.bio}</span>
            </div>
          <div className="profileRightBottom">
            <Feed username={username} isHomepage={false}/>
            <ProfileInfo user={user}/> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;