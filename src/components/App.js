import React, { Component } from 'react';
import '../styles/App.css';

// Components
import MainHeader from './MainHeader'
import Editor from './Editor';
import MainFooter from './MainFooter';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <div className="container">
          <Editor />
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default App;
