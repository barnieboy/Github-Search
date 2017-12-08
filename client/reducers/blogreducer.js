import { ADD_NEW_BLOG ,GET_ALL_BLOG } from '../actions/types';

const initialState = {
  blog: {},
  blogs:{}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_NEW_BLOG:
      return {
        blog: action.blog
      };
     case GET_ALL_BLOG:
     return{
       blogs:action.blogs
     }
    default: return state;
  }
}

