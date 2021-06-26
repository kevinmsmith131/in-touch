import './header.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';  
import { Link } from 'react-router-dom';  
import { useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import { LoginSuccess } from './../../context/UserActions';

const Header = ({ isHomepage, username }) => {
  const { user, dispatch } = useContext(UserContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logout = () => {
    dispatch(LoginSuccess(null));
    localStorage.clear();
    window.location.replace('http://localhost:3000/register');
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft"/>
        <button className="logoutButton" onClick={logout}>
          <Link to="/">
            <ExitToAppIcon className="logoutButtonLogo" />
          </Link>
        </button>
      <div className="headerCenter">
        <Link to ="/">
          <span className="logo">InTouch</span>
        </Link>
      </div>
      <div className="headerRight">
        {(isHomepage || user.username !== username)
          ? <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture ? PF + user.profilePicture: PF + '/user/defaultAvatar.jpg'} alt="" className="headerProPic"/>
            </Link>
          : <a href="#top">
              <img src={user.profilePicture ? PF + user.profilePicture: PF + '/user/defaultAvatar.jpg'} alt="" className="headerProPic"/>
            </a>
        }
      </div>
    </div>
  );
};

export default Header;