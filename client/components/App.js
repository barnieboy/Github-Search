import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" style={{'width':'100%'}}>
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
