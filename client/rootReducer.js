import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import blogreducer from './reducers/blogreducer';
import githubreducer from './reducers/githubreducer';


export default combineReducers({
  flashMessages,
  auth,
  githubreducer
});
