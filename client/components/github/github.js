import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getallblog } from '../../actions/blogActions';
import Blogfeed from './blogfeed'
import _ from 'lodash';

class Dashboard extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      blogdata:[]
    }
    };
   componentWillMount(){
      this.props.getallblog().then(
        (res) => {
          const blogg = this.props.blogs.data.blogs;
         _.forEach(blogg, function(value) {
              this.setState({blogdata:this.state.blogdata.push(value)})
          });  
           
         
               
        }     
      );     
   }
 

  render() {
    return (
      
      <Blogfeed/>

    );
  }
}


Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
 
	return {
	blogs:state.blogreducer.blogs
	}
}


export default connect(mapStateToProps, { getallblog })(Dashboard);

