import React from 'react';
import BlogForm from './BlogForm';

class BlogPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <BlogForm />
        </div>
      </div>
    );
  }
}

export default BlogPage;
