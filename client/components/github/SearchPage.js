import React from 'react';
import SearchForm from './SearchForm';
// import UserList from './UserList';

class SearchPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div>
          <SearchForm />
        </div>
        {/* <div className="col-md-4 col-md-offset-4">
        <UserList />
      </div> */}
      </div>

    );
  }
}

export default SearchPage;
