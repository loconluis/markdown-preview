import React, { Component } from 'react';
import '../styles/App.css';

// Components
import MainHeader from './MainHeader'
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <div className="container">
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
