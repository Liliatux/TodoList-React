import React, { Component } from 'react';
import Filter from './components/Filter';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
         <Filter />
         <List />
      </div>
    );
  }
}

export default App;
