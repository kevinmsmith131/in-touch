import './post.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import logger from './../../utils/logger';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US');

const Post = ({ post, isHomepage }) => {
  const [numLikes, setNumLikes] = useState(post.likes.length);
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [dropdown, setDropdown] = useState(false);  
  const PF = '/assets';
  const { user: currentUser } = useContext(UserContext);
  const dropdownName = isHomepage ? 'postDropdownHome': 'postDropdownProfile';
  const widgetName = isHomepage ? 'postDropdownWidgetHome' : 'postDropdownWidgetProfile';

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

  const editPost = async () => {
    const updatedCaption = prompt('Enter the new caption for the post.');
    const confirmation = prompt('Enter Y to confirm or anything else to cancel. Casing does not matter.')?.toLowerCase();

    if (confirmation === 'y') {
      try {
        const updatedPost = { ...post, caption: updatedCaption };
        await axios.put(`/posts/${post._id}`, updatedPost);
        window.location.reload();
      } catch(error) {
        logger.error(error);
      }
    }
  }

  const deletePost = async () => {
    const confirmation = prompt('Enter Y to confirm or anything else to cancel. Casing does not matter.')?.toLowerCase();

    if (confirmation === 'y') {
      try {
        await axios.delete(`/posts/${post._id}`, { data: post });
        window.location.reload();
      } catch(error) {
        logger.error(error);
      }
    }

  };

  const invertDropdown = () => setDropdown(!dropdown);

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
          {dropdown &&
            <>
              <div className={dropdownName}>
                <div className="postDropdownEntry" onClick={editPost}>
                  <EditIcon className="postDropdownEdit" />
                  <span className="postDropdownEdit">Edit Caption</span>
                </div>
                <div className="postDropdownEntry" onClick={deletePost}>
                  <DeleteIcon className="postDropdownDelete" />
                  <span className="postDropdownDelete">Delete Post</span>
                </div>
              </div>
              <div className={widgetName}/>
            </>
          }
          {post?.userId === currentUser?._id 
            && <MoreHorizIcon 
                 className="postOptions" 
                 style={{ marginLeft : isHomepage ? '80%' : '75%' }} 
                 onClick={invertDropdown}
               />
          }
        </div>
        <span className="postCaption">{post?.caption}</span>
        <div className="postCenter">
          <img className="postContent" src={PF + post?.content} alt=""/>
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