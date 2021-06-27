import './profileinfo.css';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SchoolIcon from '@material-ui/icons/School';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
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
  const [followed, setFollowed] = useState(currentUser.following.includes(user._id));

  console.log(currentUser.following)

  useEffect(() => {
    setFollowed(currentUser.following.includes(user._id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFollowedUsers = async () => {
      try {
        if (user && user._id) {
          const followedUserList = await axios.get(`/users/followers/${user._id}`);
          setFollowedUsers(followedUserList.data.filter(u => u !== null && u !== undefined));
        }
      } catch(error) {
        logger.error(error);
      }
    };
    getFollowedUsers();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, { userId: currentUser._id });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, { userId: currentUser._id });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch(error) {
      logger.error(error);
    }
    setFollowed(!followed);
    window.location.reload();
  };

  const setInfo = async field => {
    try {
      let input = prompt('Enter your ' + field + '. There is a 40 character limit to keep information to the point.');
      if (input.length > 40) {
        field = field.charAt(0).toUpperCase() + field.slice(1);

        input = field + ' unspecified';
        alert(field + ' input exceeded 40 character limit. ' + field + ' set to unspecified.');

        field = field.charAt(0).toLowerCase() + field.slice(1);
      }

      const currUser = await axios.get('/users/', { params: { userId: user._id } });
      let updatedUser = {};
      if (field === 'location') {
        updatedUser = { ...currUser, location: input };
      } else if (field === 'job') {
        updatedUser = { ...currUser, job: input };
      } else if (field === 'education') {
        updatedUser = { ...currUser, education: input };
      } else {
        logger.error('Invalid user information field selected');
      }

      await axios.put(`/users/${user._id}`, updatedUser);
      window.location.reload();
    } catch(error) {
      logger.error(error);
    }
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
            {currentUser._id === user._id 
              ? <LocationOnIcon className="profileinfoKeySelf" htmlColor="rgb(60, 60, 60)" onClick={() => setInfo('location')} />
              : <LocationOnIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
             }
            <span className="profileinfoValue">{user.location ? user.location : 'Location unspecified'}</span>
          </div>
          <div className="profileinfoPair">
            {currentUser._id === user._id
              ? <WorkIcon className="profileinfoKeySelf" htmlColor="rgb(60, 60, 60)" onClick={() => setInfo('job')} />
              : <WorkIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
            }
            <span className="profileinfoValue">{user.job ? user.job : 'Job unspecified'}</span>
          </div>
          <div className="profileinfoPair">
            {currentUser._id === user._id
              ? <SchoolIcon className="profileinfoKeySelf" htmlColor="rgb(60, 60, 60)" onClick={() => setInfo('education')} />
              : <SchoolIcon className="profileinfoKey" htmlColor="rgb(60, 60, 60)" />
            }
            <span className="profileinfoValue">{user.education ? user.education : 'Education unspecified'}</span>
          </div>
        </div>
        <div className="profileinfoFollowing">
          <h4 className="profileinfoTitle">Followers</h4>
          {followedUsers.length === 0 
            ? <div className="noUsersFollowed">
                <PersonOutlineIcon className="noUsersFollowedIcon" fontSize="large" />
                No Followers
              </div>
            : <div className="profileinfoFollowingList">
                {followedUsers.map(followedUser => 
                    ( 
                      <Link key={followedUser._id} to={`/profile/${followedUser.username}`} style={{ textDecoration: "none" }}>
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
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;