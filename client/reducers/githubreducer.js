import { SEARCH_USER ,LIST_USERS} from '../actions/types';

const initialState = {
  users: {},
  user:{}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_USER:
      return {
        users: action.users
      };
     case LIST_USERS:
     return{
       user:action.user
     }
    default: return state;
  }
}

