import './register.css';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import { LoginStart } from './../../context/UserActions';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const { isRetrieving, dispatch } = useContext(UserContext);

  const handleClick = async event => {
    event.preventDefault();
    dispatch(LoginStart());

    const refresh = () => {
      window.location.reload();
    };

    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity('Passwords do not match');
      setTimeout(refresh, 3000);
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };

      try {
        await axios.post('auth/register', user);
      } catch(error) {
        email.current.setCustomValidity('There is already a user with these credentials. Use Login Page for logging in.');
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
            <button className="registerButton" type="submit" disabled={isRetrieving}>
              {isRetrieving 
                ? <CircularProgress color="white" size="20px" />
                : "Create Account"
              }
            </button>
            <Link to="/login">
              <div className="registerButtonLogin" disabled={isRetrieving}>
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