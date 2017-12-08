import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addnewblog } from '../../actions/blogActions';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
      this.props.addnewblog(this.state).then(
        (res) => this.context.router.push('/dashboard'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
       const { errors, title, body, isLoading } = this.state;

    return (

  <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <label>Title</label>
        <div>
        <input
            name="title"
            type="text"
            className="form-control"
            placeholder="*Blog Title"
            value={title}
            error={errors.title}
            onChange={this.onChange}
            />

    </div>
</div>
<div className = "form-group" >
   <label>Body</label> 
<div >
  <textarea
          name="body"
          rows="8"
          cols="80"
          placeholder="Body"
          className="form-control"
          value={body}
          error={errors.body}
          onChange={this.onChange}
      ></textarea>
 </div>
  </div >
  <Link to="/dashboard" type="button" name="button" className="btn btn-warning">Go Back</Link>&nbsp;
  < button type = "submit"  name = "button" disabled={isLoading} className = "btn btn-success" > Submit </button>
</form>
  );
  }
}
BlogForm.propTypes = {
  addnewblog: React.PropTypes.func.isRequired

} 

BlogForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default connect(null, { addnewblog })(BlogForm);

