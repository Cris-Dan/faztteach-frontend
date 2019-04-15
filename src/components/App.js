import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  static get propTypes() {
    return {
       children: PropTypes.object.isRequired
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
