import './login.css';
import { useContext, useRef } from 'react'; 
import { loginCall } from './../../apiCalls';
import { UserContext } from './../../context/UserContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isRetrieving, dispatch } = useContext(UserContext);

  const handleClick = event => {
    event.preventDefault();
    loginCall({ email, password }, dispatch);
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">InTouch</h3>
          <span className="loginDescription">The quickest and easiest way to stay in touch.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input className="loginInput" placeholder="Email" type="email" ref={email} required/>
            <input className="loginInput" placeholder="Password" type="password" ref={password} required minLength="5"/>
            <button className="loginButton" type="submit" disabled={isRetrieving}>
              {isRetrieving 
                ? <CircularProgress color="white" size="20px" /> 
                : "Login"
              }
            </button>
            <Link to="/register">
              <div className="loginCreateAccount" disabled={isRetrieving}>
                Register Page
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;