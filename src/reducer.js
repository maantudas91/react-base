import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './rdx/reducers/auth';

export default combineReducers({
  auth,
});
