import axios from 'axios';
import { ADD_NEW_BLOG ,GET_ALL_BLOG} from './types';

export function addblog(blog) {
  return {
    type: ADD_NEW_BLOG,
    blog
  };
}
export function getblog(blogs) {
  return {
    type: GET_ALL_BLOG,
    blogs
  };
}

export function addnewblog(data) {
  return dispatch => {
    return axios.post('/api/blog/addnewblog',data).then(res => {
      dispatch(addblog(res));
    });
  }
}

export function getallblog() {
	return dispatch => {
    return axios.get('/api/blog/allBlogs').then(res => {
      dispatch(getblog(res));
    });
  }
};