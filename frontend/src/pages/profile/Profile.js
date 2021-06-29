import './profile.css';
import Header from './../../components/header/Header';
import FollowingBar from './../../components/followingbar/FollowingBar';
import Feed from './../../components/feed/Feed';
import ProfileInfo from './../../components/profileinfo/ProfileInfo';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './../../context/UserContext';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockIcon from '@material-ui/icons/Lock';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { LoginSuccess } from './../../context/UserActions';
import logger from '../../utils/logger';

const Profile = () => {
  const PF = '/images';
  const [user, setUser] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const username = useParams().username;
  const { user: currentUser, dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/users/${username}`);
        setUser(response.data);
      } catch (error) {
        logger.error(error);
      }
    }
    getUser();
  }, [username]);

  useEffect(() => { if (dropdown) setDropdown(false) }, [user]);

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const editProfile = async field => {
      const updatedField = prompt('Enter your new ' + field + '.');
      const confirmation = prompt('Enter Y to confirm or N to cancel. Casing does not matter.')?.toLowerCase();
      if (confirmation === 'y') {
        try {
          const oldProfile = await axios.get(`/users?username=${username}`);
          if (field === 'email' && isValidEmail(updatedField)) {
            await axios.put(`/users/email/${user._id}`, { data: { ...oldProfile, email: updatedField } });
          } else if (field === 'username') {
            const result = await axios.put(`/users/username/${user._id}`, { data: { ...oldProfile, username: updatedField } });
            const newName = result.data.name;
            dispatch(LoginSuccess({ ...currentUser, username: newName }));
            history.push(`/profile/${newName}`);
          } else if (field === 'password' && updatedField.length >= 5) {
            await axios.put(`/users/password/${user._id}`, { data: { ...oldProfile, password: updatedField } });
          } else {
            alert(`Invalid ${field}. Passwords must be at least 5 characters and emails must be in valid format.`);
            return;
          }
          alert(`${field} successfully changed.`);
        } catch(error) {
          logger.error(error);
        }
      }
  };

  const logout = () => {
    history.push('/register');
    dispatch(LoginSuccess(null));
    localStorage.clear();
  };

  const deleteAccount = async () => {
    const confirmation = prompt('Enter Y to confirm or N to cancel. Casing does not matter.')?.toLowerCase();
    if (confirmation === 'y') {
      try {
        await axios.delete(`/users/${currentUser._id}`, { data: currentUser });
        logout();
      } catch(error) {
        logger.error(error);
      }
    }
  };

  const editEmail = () => editProfile('email');
  const editUsername = () => editProfile('username');
  const editPassword = () => editProfile('password');
  const invertDropdown = () => setDropdown(!dropdown);

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
          {dropdown && 
            <div className="profileDropdown triangle">
              <div className="profileDropdownEntry" onClick={editEmail}>
                <EmailIcon className="profileDropdownEdit" />
                <span className="profileDropdownEdit">Change Email</span>
              </div>
              <div className="profileDropdownEntry" onClick={editUsername}>
                <AssignmentIndIcon className="profileDropdownEdit" />
                <span className="profileDropdownEdit">Change Username</span>
              </div>
              <div className="profileDropdownEntry" onClick={editPassword}>
                <LockIcon className="profileDropdownEdit" />
                <span className="profileDropdownEdit">Change Password</span>
              </div>
              <div className="profileDropdownEntry" onClick={deleteAccount}>
                <DeleteIcon className="profileDropdownDelete" />
                <span className="profileDropdownDelete">Delete Account</span>
              </div>
            </div>
          }
          <div className="profileInfo">
            <a href="#top">
              <h4 className="profileInfoName">{user.username}</h4>
            </a>
            <span className="profileInfoBio">{user.bio}</span>
            {user?._id === currentUser?._id && <MoreHorizIcon className="profileOptions" onClick={invertDropdown} />}
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