import axios from 'axios';
import { LoginStart, LoginFailure, LoginSuccess } from './context/UserActions';

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(LoginStart());
  try {
    const response = await axios.post('auth/login', {
      email: userCredentials.email.current.value,
      password: userCredentials.password.current.value
    });
    dispatch(LoginSuccess(response.data));
  } catch (error) {
    dispatch(LoginFailure(error));
    userCredentials.email.current.setCustomValidity('No user exists with these credentials. Use Register Page for registration.');

    const refresh = () => {
      window.location.reload();
    };
    setTimeout(refresh, 3000);
  }
};  