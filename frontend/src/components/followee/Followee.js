import './followee.css';
import { Link } from 'react-router-dom';

const Followee = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <Link to={`/profile/${user.username}`}>
      <li className="followingbarFollowee">
        <img className="followingbarFolloweeImg" src={user.profilePicture ? PF + user.profilePicture: PF + "/user/defaultAvatar.jpg"} alt=""/>
        <span className="followingbarFolloweeName">{user.username}</span>
      </li>
    </Link>
  );
};

export default Followee;