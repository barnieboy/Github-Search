import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
// import BlogPage from './components/blog/BlogPage';
import SearchPage from './components/github/SearchPage';
import Dashboard from './components/dashboard/dashboard';
import requireAuth from './utils/requireAuth';

function checklogin(nextState, replace, next) {
  if (localStorage.getItem('jwtToken')) {
    replace({
      pathname: "/search",
      state: {nextPathname: nextState.location.pathname}
    });
  }else{
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}
export default (
  <Route path="/" component={App} >
    <IndexRoute component={LoginPage} onEnter={checklogin}/>
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage}/>
    <Route path="search" component={requireAuth(SearchPage)}/>
    {/* <Route path="blog" component={requireAuth(BlogPage)}/> */}
    {/* <Route path="dashboard" component={requireAuth(Dashboard)}/> */}
  </Route>
)

