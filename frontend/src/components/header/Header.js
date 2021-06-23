import './header.css';
import HomeIcon from '@material-ui/icons/Home';   
import { Link } from 'react-router-dom';  
import { useContext } from 'react';
import { UserContext } from './../../context/UserContext';

const Header = ({ isHomepage, username }) => {
  const { user } = useContext(UserContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="headerContainer">
      <div className="headerLeft"/>
        <div className="homeButton">
          <Link to="/">
            <HomeIcon htmlColor="rgb(230, 230, 230)"/>
          </Link>
        </div>
      <div className="headerCenter">
        <span className="logo">InTouch</span>
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