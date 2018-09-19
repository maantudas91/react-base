import { LOGIN, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/ActionTypes';
import { firebaseAuth } from '../../firebase';
import { logout } from '../../services/UserService';

export function login() {
  return {
    type: LOGIN
  };
}

export function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS
  };
}


export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const Logout = () => {
  return dispatch => {
    logout().then(() =>{
      dispatch(logoutSuccess());
      localStorage.removeItem('user')
    });
  }
};

export const Authorize = () => dispatch => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
     dispatch(loginSuccess(user))
    }
  });
}
