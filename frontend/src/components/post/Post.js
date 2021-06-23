import './post.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US');

const Post = ({ post, isHomepage }) => {
  const [numLikes, setNumLikes] = useState(post.likes.length);
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    }
    getUser();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser, post.likes]);

  const likeCallback = () => {
    try {
      axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
    } catch(error) {
      
    }
    setNumLikes(isLiked ? numLikes - 1 : numLikes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          {isHomepage 
            ? <Link to={`/profile/${user.username}`}>
                <img className="postProPic" src={user.profilePicture ? PF + user.profilePicture : PF + "/user/defaultAvatar.jpg"} alt=""/>
              </Link>
            : <a href="#top">
                <img className="postProPic" src={user.profilePicture ? PF + user.profilePicture : PF + "/user/defaultAvatar.jpg"} alt=""/>
              </a>
          }
          <div className="postTopText">
            {isHomepage 
              ? <Link to={`/profile/${user.username}`} color="black">
                  <span className="postUsername">{user.username}</span>
                </Link>
              : <a href="#top">
                  <span className="postUsername">{user.username}</span>
                </a>
            }
            <span className="postDate">{timeAgo.format(Date.now() - (Date.now() -new Date(post.createdAt).getTime()), 'mini-now')}</span>
          </div>
        </div>
        <span className="postCaption">{post?.caption}</span>
        <div className="postCenter">
          <img className="postContent" src={PF + post.content} alt=""/>
        </div>
        <div className="postBottom">
          <img className="likeButton" src={`${PF}/likeButton.png`} onClick={likeCallback}alt=""/>
          <span className="postNumLikes">{numLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;