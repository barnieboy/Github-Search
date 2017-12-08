import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.push('/login');
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        {/* <li><Link to="/search">Dashboard</Link></li>
        <li><Link to="/blog">Blog</Link></li> */}
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
         {/* <li style={{float:'left'}}>HI this is paragraph</li> */}
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (

      <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div class="navbar-header">
      {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
    </div>

          <div className="collapse navbar-collapse">
          <h2 class="navbar-brand" style={{float:'left', 'text-transform': 'uppercase',
          color:'#4CAF50','text-indent': '50px','text-align': 'justify',
    'letter-spacing': '3px'}}>GitHub Search</h2>
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}
NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
