import React from 'react';
import {Link} from 'react-router';

const Blogfeed = (props) => (
    <div>
        <div>
            <h3>
                <strong>Blog Feed</strong>
            </h3>
            <Link to="/blog" type="button" name="button" className="btn btn-warning">New Post</Link>&nbsp;&nbsp;
            <button type="button" name="button" className="btn btn-default">Reload</button>
        </div>
        <br/>
        <br/>
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">hello</h3>
            </div>
            <div style={divStyle}>
                <strong>Body:
                </strong>
                <br/>
                <strong>Posted by:
                </strong>
                <br/>
                <strong>Date:
                </strong>
                <br/>
                <div>
                    <strong>Likes:
                    </strong>
                    <br/>
                    <strong>Dislikes:
                    </strong>
                </div>

                <a>
                    <button type="button" name="button" className="btn btn-sm btn-info">Edit;</button>
                </a>&nbsp;
                <a>
                    <button type="button" name="button" className="btn btn-sm btn-danger">Delete</button>
                </a>
            </div>
        </div>
    </div>
)
var divStyle = {
    padding: 8
};
export default Blogfeed;