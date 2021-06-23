import './makepost.css'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CodeIcon from '@material-ui/icons/Code';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import CancelIcon from '@material-ui/icons/Cancel';
import { useContext, useRef, useState } from 'react';
import { UserContext } from './../../context/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from './../../utils/logger';

const MakePost = ({ isHomepage }) => {
  const { user } = useContext(UserContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const caption = useRef();
  const [file, setFile] = useState(null);

  const submitCallback = async (event) => {
    event.preventDefault();
    
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
      await axios.post('/posts', newPost);
      window.location.reload();
    } catch(error) {
      logger.error(error);
    }
  };

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
            <CancelIcon className="makepostContentCancel" onClick={() => setFile(null)} />
          </div>
        )}
        <form onSubmit={submitCallback}>
          <div className="makepostBottom">
            <div className="makepostOptions">
              <label className="makepostOption" htmlFor="file">
                <AddPhotoAlternateIcon className="makepostIcon" htmlColor="rgb(206, 33, 55)"/>
                <span className="makepostOptionText">Photo/Video</span>
                <input 
                  type="file" 
                  style={{ display: "none" }}
                  id="file" 
                  accept=".png, .jpg, .jpeg, .mov, .mp4" 
                  onChange={event => setFile(event.target.files[0])}
                />
              </label>            
              <label className="makepostOption" htmlFor="file">
                <CodeIcon className="makepostIcon" htmlColor="rgb(0, 180, 0)"/>
                <span className="makepostOptionText">Code</span>
                <input 
                  type="file" 
                  style={{ display: "none" }}
                  id="file" 
                  accept=".py, .js, .ts, .java, .c, .h, .cpp, .cs, .php, .sh, .swift, .vb, .cs, .cgi, .pl, .htm, .html, .css, .xml, .xhtml"
                  onChange={event => setFile(event.target.files[0])}
                />
              </label>
              <label className="makepostOption" htmlFor="file">
                <InsertLinkIcon className="makepostIcon" htmlColor="rgb(0, 102, 204)"/>
                <span className="makepostOptionText">Link</span>
                <input type="url" style={{ display: "none" }} id="file" onChange={event => setFile(event.target.files[0])}/>
              </label>
              <label className="makepostOption" htmlFor="file">
                <AttachFileIcon className="makepostIcon" htmlColor="rgb(140, 140, 140)"/>
                <span className="makepostOptionText">File</span>
                <input type="file" style={{ display: "none" }} id="file" onChange={event => setFile(event.target.files[0])}/>
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