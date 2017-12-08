import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { searchgithubuser } from '../../actions/githubActions';
import _ from 'lodash';
var stylecss={
  'float':'left',
  'marginLeft':'20px',
  'marginBottom':'20px'

};
var containerStyle={
  'width':'100%'
}
var floating={
  'display': 'inline-block',
  'width': '360px',
  'height': '286px',
  'margin': '10px',
'margin-bottom':'40px'
  

}
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
      errors: {},
      usersList:[],
      isLoading: false
    };
   

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
  var this2=this;
    this.setState({ errors: {},usersList:[], isLoading: true });
      this.props.searchgithubuser(this.state).then(
        // (res) => this.context.router.push('/dashboard'),
      (res) =>{
        console.log(this.props.users.data.items);
        const usersdata = this.props.users.data.items;
        this2.setState({usersList:usersdata, isLoading: false});
        // _.forEach(usersdata, function(value) {
        //   console.log(value);
        //   this2.setState({usersList:this2.state.usersList.push(value)})
        // });
       });
       (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
       const { errors, searchText,usersList, isLoading } = this.state;

    return (
      
<div class="container" style={containerStyle}>
<div className="col-md-4 col-md-offset-4">
  <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <div>
        <input
            name="searchText"
            type="text"
            className="form-control"
            placeholder="Search Users on Github"
            value={searchText}
            error={errors.searchText}
            onChange={this.onChange}
            />

    </div>
</div>
  
  < button type = "submit"  name = "button" disabled={isLoading} className = "btn btn-success" style={{float:'right',marginRight:'160px'}}> Search </button>
 

</form>


</div>
<div className="col-md-4 col-md-offset-8">
  </div>
 <div class="container-fluid" > 
 <div class="row"> 
<ul style={{'list-style-type': 'none', 'margin-top':'20px', 'margin-left':'60px'}}>
                {usersList.map(function(name, index){
                    return (
                      //  <div class="col-sm-4"> 
                       <div  style={floating}  class="floating-box"> 
                      <li key={ index }>GitHub Id : {name.id}</li>
                      <li>UserName : {name.login}</li>
                       <img src={name.avatar_url} class="img-rounded" width="304" height="236"/>
                     <li> <a href={name.html_url} target="_blank">Visit on Github</a></li>
                       </div>
                    );
                  },this)}
                   </ul>
                  </div> 
                   </div> 
                 
            
  </div>
  );
  }
}
SearchForm.propTypes = {
  searchgithubuser: React.PropTypes.func.isRequired,
 // searchuser:React.PropTypes.func.isRequired

} 

SearchForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
const mapStateToProps = state => {
  
   return {
   users:state.githubreducer.users
   }
 }
 
 
export default connect(mapStateToProps,{ searchgithubuser })(SearchForm);

