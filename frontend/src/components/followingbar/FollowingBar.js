import './followingbar.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Followee from '../followee/Followee';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FollowingBar = ({ user }) => {
  const [followees, setFollowees] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const followingUsers = await axios.get('/users/following/' + user._id);
      setFollowees(followingUsers.data);
    }
    getUsers();
  }, [user]);

  return (
    <div className="followingbar">
      <div className="followingbarWrapper">
        <div className="followingbarTitleWrapper">
          <div className="followingbarTitle">
            <SupervisorAccountIcon className="followeeLogo" htmlColor="rgb(100, 100, 100)"/>
            <p>Following</p>
          </div>
          <hr className="followingbarHr"/>
        </div>
        <ul className="followingbarFollowees">
          {followees.map(followee => <Followee key={followee._id} user={followee} />)}
        </ul>
      </div>
    </div>
  );
};

export default FollowingBar;