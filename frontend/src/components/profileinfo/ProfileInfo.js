import './profileinfo.css';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import logger from './../../utils/logger';

const ProfileInfo = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [followedUsers, setFollowedUsers] = useState([]);
  const { user: currentUser, dispatch } = useContext(UserContext);
  const [followed, setFollowed] = useState(currentUser.following.includes(user?._id));

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFollowedUsers = async () => {
      try {
        const followedUserList = await axios.get('/users/followers/' + user._id);
        setFollowedUsers(followedUserList.data.filter(u => u !== null && u !== undefined));
      } catch(error) {
        logger.error(error);
      }
    };
    getFollowedUsers();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put('/users/' + user._id + '/unfollow', { userId: currentUser._id });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put('/users/' + user._id + '/follow', { userId: currentUser._id });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch(error) {
      logger.error(error);
    }
    setFollowed(!followed);
  };

  return (
    <div className='profileinfo'>
      <div className="profileinfoItem">
        {user.username !== currentUser.username && 
          (
            followed 
              ? <button className="profileinfoUnfollowButton" onClick={handleClick}>
                  <div className="profileinfoUnfollowButtonContent"> 
                    <PersonAddDisabledIcon /> Unfollow 
                  </div>
                </button>
              : <button className="profileinfoFollowButton" onClick={handleClick}>
                  <div className="profileinfoFollowButtonContent">
                    <PersonAddIcon /> Follow
                  </div>
                </button> 
          )
        }
        <div className="profileinfoMain">
          <h4 className="profileinfoTitle">Information</h4>
          <div className="profileinfoPair">
            <LocationOnIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
            <span className="profileinfoValue">{user.location}</span>
          </div>
          <div className="profileinfoPair">
            <WorkIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
            <span className="profileinfoValue">{user.job}</span>
          </div>
          <div className="profileinfoPair">
            <SchoolIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
            <span className="profileinfoValue">{user.education}</span>
          </div>
        </div>
        <div className="profileinfoFollowing">
          <h4 className="profileinfoTitle">Followers</h4>
          <div className="profileinfoFollowingList">
            {followedUsers.map(followedUser => 
                ( 
                  <Link to={`/profile/${followedUser.username}`} style={{ textDecoration: "none" }}>
                    <div className="profileinfoFollowee">
                      <img 
                        className="profileinfoFolloweeProPic" 
                        src={followedUser.profilePicture ? PF + followedUser.profilePicture : PF + '/user/defaultAvatar.jpg'} 
                        alt=""
                      />
                      <span className="profileinfoFolloweeUsername">{followedUser.username}</span>
                    </div>
                  </Link>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;