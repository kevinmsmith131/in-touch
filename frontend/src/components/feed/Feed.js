import './feed.css';
import MakePost from './../makepost/MakePost';
import Post from './../post/Post';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './../../context/UserContext'; 
import EventBusyIcon from '@material-ui/icons/EventBusy';

const Feed = ({ username, isHomepage }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const feedWrapper = isHomepage || posts.length > 0 || username === user.username ? "homeFeedWrapper" : "profileFeedWrapper";

  useEffect(() => {
    const getPosts = async () => {
      const response = username 
        ? await axios.get('/posts/profile/' + username)
        : await axios.get('posts/feed/' + user._id);
      setPosts(response.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
    }
    getPosts();
  }, [username, user]);

  return (
    <div className="feed">
      <div className={feedWrapper}>
        {(username === user.username || username === user.userName) && <MakePost isHomepage={isHomepage} />}
        {posts.length === 0
          ? <div className="noPosts">
              <EventBusyIcon className="noPostIcon" fontSize="large" />
              No Posts Yet  
            </div>
          : posts.map(post => <Post key={post._id} post={post} isHomepage={isHomepage} />)
        }
      </div>
    </div>
  );
};

export default Feed;