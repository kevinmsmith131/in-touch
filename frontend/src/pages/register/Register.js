import './register.css';
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { UserContext } from './../../context/UserContext';
import { LoginSuccess } from './../../context/UserActions';

const Register = () => {
  const [waiting, setWaiting] = useState(false);
  const { dispatch } = useContext(UserContext)
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleClick = async event => {
    event.preventDefault();
    setWaiting(true);

    const refresh = () => window.location.reload();

    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity('Passwords do not match');
      setWaiting(false);
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value.toLowerCase(),
        password: password.current.value
      };

      try {
        const currUser = await axios.post('/auth/register', user);
        dispatch(LoginSuccess(currUser.data));
        setWaiting(false);
      } catch(error) {
        alert('There is already a user with these credentials. Use Login Page for logging in.');
        setWaiting(false);
        setTimeout(refresh, 3000);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">InTouch</h3>
          <span className="registerDescription">The quickest and easiest way to stay in touch.</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input className="registerInput" placeholder="Email" ref={email} type="email" required/>
            <input className="registerInput" placeholder="Username" ref={username} required/>
            <input className="registerInput" placeholder="Password" type="password" ref={password} minLength="5" required/>
            <input className="registerInput" placeholder="Confirm Password" type="password" ref={confirmPassword} minLength="5" required/>
            <button className="registerButton" type="submit" disabled={waiting}>
              {waiting
                ? <CircularProgress color="white" size="20px" />
                : "Create Account"
              }
            </button>
            <Link to="/login">
              <div className="registerButtonLogin" disabled={waiting}>
                Login Page
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
