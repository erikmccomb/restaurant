import React, { Component } from 'react';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Route 
        exact path='/'
        component={Home}
      />
    );
  }
}

export default App;
