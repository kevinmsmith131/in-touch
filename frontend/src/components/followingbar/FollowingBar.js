import './followingbar.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Followee from '../followee/Followee';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FollowingBar = ({ user }) => {
  const [followees, setFollowees] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const followingUsers = await axios.get('/users/following/' + user._id);
      setFollowees(followingUsers.data.filter(u => u !== null && u !== undefined));
    }
    getUsers();
  }, [user]);

  return (
    <div id="followingbar">
      <div className="followingbarWrapper">
        <div className="followingbarTitleWrapper">
          <div 
            className="followingbarTitle" 
            onClick={() => document.getElementById('followingbar').scrollTo(0, 0)}>
            <SupervisorAccountIcon className="followeeLogo" htmlColor="rgb(100, 100, 100)"/>
            <p>Following</p>
          </div>
          <hr className="followingbarHr"/>
        </div>
        {followees.length === 0
        ? <div className="noUsersFollowing">
            <PersonOutlineIcon className="noUsersFollowingIcon" fontSize="large" />
            Following No Users
          </div> 
        : <ul className="followingbarFollowees">
            {followees.map(followee => <Followee key={followee._id} user={followee} />)}
          </ul>
        }
      </div>
    </div>
  );
};

export default FollowingBar;