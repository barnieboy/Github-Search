import axios from 'axios';
import { SEARCH_USER ,LIST_USERS} from './types';


export function searchuser(users) {
  return {
    type: SEARCH_USER,
    users
  };
}
export function listUser(user) {
  return {
    type:LIST_USERS,
    user
  };
}

export function searchgithubuser(searchText) {
  return dispatch => {
    return axios.post('/api/github/searchUser',searchText).then(res => {
     // console.log(res.data);
      dispatch(searchuser(res));
    });
  }
}

export function getuser(userId) {
	return dispatch => {
    return axios.post('/api/github/listUser',userId).then(res => {
      dispatch(listUser(res));
    });
  }
};