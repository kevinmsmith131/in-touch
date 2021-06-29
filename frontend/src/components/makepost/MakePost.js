import './makepost.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PersonIcon from '@material-ui/icons/Person';
import PanoramaIcon from '@material-ui/icons/Panorama';
import SubjectIcon from '@material-ui/icons/Subject';
import CancelIcon from '@material-ui/icons/Cancel';
import { useContext, useRef, useState } from 'react';
import { UserContext } from './../../context/UserContext';
import { LoginSuccess } from './../../context/UserActions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from './../../utils/logger';

const MakePost = ({ isHomepage }) => {
  const { user, dispatch } = useContext(UserContext);
  const PF = '/images'
  const caption = useRef();
  const [file, setFile] = useState(null);
  const [button, setButton] = useState('media');

  const uploadMedia = async () => {
    const newPost = {
      userId: user._id,
      caption: caption.current.value
    };
    
    if (file) {
      const data = new FormData();
      const filename = '/post/' + Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.content = filename;
      try {
        await axios.post('/upload', data);
      } catch(error) {
        logger.error(error);
      }
    }

    try {
      if (file || caption.current.value) {
        await axios.post('/posts', newPost);
        window.location.reload();
      } else {
        alert('Cannot make an empty post');
      }
    } catch(error) {
      logger.error(error);
    }
  };

  const profileOrCover = async () => {
    try {
      if (file) {
        const data = new FormData();
        const filename = '/post/' + Date.now() + file.name;
        data.append('name', filename);
        data.append('file', file);
        await axios.post('/upload', data);

        const currUser = await axios.get('/users/', { params: { userId: user._id } });
        let updatedUser = {};
        let refreshedUser = {};
        if (button === 'coverPhoto') {
          updatedUser = { ...currUser, coverPicture: filename };
          refreshedUser = { ...user, coverPicture: filename };
        } else {
          updatedUser = { ...currUser, profilePicture: filename };
          refreshedUser = { ...user, profilePicture: filename };
        }
        await axios.put(`/users/${user._id}`, updatedUser);
        dispatch(LoginSuccess(refreshedUser));
        window.location.reload();
      } else {
        alert('Cannot update without a picture');
      }
    } catch(error) {
      logger.error(error);
    }
  };

  const bio = async () => {
    try {
      if (caption.current.value) {
        const currUser = await axios.get('/users/', { params: { userId: user._id } });
        const updatedUser = { ...currUser, bio: caption.current.value };
        await axios.put(`/users/${user._id}`, updatedUser);
        window.location.reload();
      }
    } catch(error) {
      logger.error(error);
    }
  };

  const submitCallback = event => {
    event.preventDefault();
  
    if (button === 'media') {
      uploadMedia();
    } else if (button === 'profilePic' || button === 'coverPhoto') {
      profileOrCover();
    } else if (button === 'bio') {
      bio();
    } else {
      logger.error('Invalid button press received');
    }
  };

  const resetFile = () => setFile(null);

  const uploadPostMedia = () => setButton('media');

  const uploadProPic = () => {
    setButton('profilePic');
    alert('Select the photo you wish to be your new profile picture, then click post, like you are making a normal post.');
  };

  const uploadCoverPic = () => {
    setButton('coverPhoto');
    alert('Select the photo you wish to be your new cover photo, then click post, like you are making a normal post.');
  };

  const updateBio = () => { 
    setButton('bio'); 
    alert('Write your new bio in the text input area, as if you were writing a caption, then press post.'); 
  };

  const setUploadedFile = event => setFile(event.target.files[0]);

  return(
    <div className="makepost">
      <div className="makepostWrapper">
        <div className="makepostTop">
          {isHomepage
            ? <Link to={`/profile/${user.username}`}>
                <img 
                  className="makepostProPic" 
                  src={user.profilePicture ? PF + user.profilePicture : PF + "/user/defaultAvatar.jpg"} 
                  alt=""
                />
              </Link>
            : <a href="#top">
                <img 
                  className="makepostProPic" 
                  src={user.profilePicture ? PF + user.profilePicture : PF + "/user/defaultAvatar.jpg"} 
                  alt=""
                />
              </a>
          }
          <input 
            className="makepostInput" 
            placeholder={"What would you like to tell the world, " + user.username + "?"}
            ref={caption}
            maxLength="500"
          />
        </div>
        <hr className="makepostHr"/>
        {file && (
          <div className="makepostContentWrapper">
            <img className="makepostContent" src={URL.createObjectURL(file)} alt=""/>
            <CancelIcon className="makepostContentCancel" onClick={resetFile} />
          </div>
        )}
        <form onSubmit={submitCallback}>
          <div className="makepostBottom">
            <div className="makepostOptions">
              <label className="makepostOption" htmlFor="media" onClick={uploadPostMedia}>
                <AddPhotoAlternateIcon className="makepostIcon" htmlColor="rgb(206, 33, 55)"/>
                <span className="makepostOptionText">Media</span>
                <input 
                  type="file" 
                  style={{ display: "none" }}
                  id="media" 
                  accept=".png, .jpg, .jpeg" 
                  onChange={setUploadedFile}
                />
              </label>            
              <label 
                className="makepostOption" 
                htmlFor="proPic"
                onClick={uploadProPic}>
                <PersonIcon className="makepostIcon" htmlColor="rgb(0, 102, 204"/>
                <span className="makepostOptionText">Profile Picture</span>
                <input 
                  type="file" 
                  style={{ display: "none" }}
                  id="proPic" 
                  accept=".png, .jpg, .jpeg" 
                  onChange={setUploadedFile}
                />
              </label>
              <label 
                className="makepostOption" 
                htmlFor="cover" 
                onClick={uploadCoverPic}>
                <PanoramaIcon className="makepostIcon" htmlColor="rgb(0, 180, 0)"/>
                <span className="makepostOptionText">Cover Photo</span>
                <input 
                  type="file" 
                  style={{ display: "none" }} 
                  id="cover" 
                  accept=".png, .jpg, .jpeg" 
                  onChange={setUploadedFile}
                />
              </label>
              <label 
                className="makepostOption" 
                onClick={updateBio}>
                <SubjectIcon className="makepostIcon" htmlColor="rgb(245, 176, 66)"/>
                <span className="makepostOptionText">Bio</span>
              </label>
            </div>
          </div>
          <div className="makepostPostButtonSection">
            <button className="makepostPostButton" type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePost;