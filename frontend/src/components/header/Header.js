import './header.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';  
import { Link } from 'react-router-dom';  
import { useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import { LoginSuccess } from './../../context/UserActions';

const Header = ({ isHomepage, username }) => {
  const { user, dispatch } = useContext(UserContext);
  const PF = '/images';

  const logout = () => {
    dispatch(LoginSuccess(null));
    localStorage.clear();
    window.location.replace('https://in-touch-heroku.herokuapp.com/');
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
        {isHomepage 
          ? <a href="#top">
              <span className="logo">InTouch</span>
            </a>
          : <Link to ="/">
              <span className="logo">InTouch</span>
            </Link>
        }
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