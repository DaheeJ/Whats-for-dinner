import React, { Component } from 'react';
import './App.css';
import Main from './views/containers/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinner Time</h1>
         

        </header>
        <p className="App-intro">
          Making dinner, without "I don't know, What do you want?"
        </p>
        <Main/>
      </div>
    );
  }
}

export default App;
