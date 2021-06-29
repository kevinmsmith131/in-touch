import './followingbar.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Followee from '../followee/Followee';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logger from '../../utils/logger';

const FollowingBar = ({ user }) => {
  const [followees, setFollowees] = useState([]);

  console.log('\n\n\nIs there a user in the following bar: ' + JSON.stringify(user))

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (user && user._id) {
          const followingUsers = await axios.get(`https://in-touch-heroku.herokuapp.com/users/following/${user._id}`);
          setFollowees(followingUsers.data.filter(u => u !== null && u !== undefined));
        }   
      } catch(error) {
        logger.error(error);
      }
    }
    getUsers();
  }, [user]);

  const scrollTop = () => document.getElementById('followingbar').scrollTo(0, 0);

  return (
    <div id="followingbar">
      <div className="followingbarWrapper">
        <div className="followingbarTitleWrapper">
          <div 
            className="followingbarTitle" 
            onClick={scrollTop}>
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