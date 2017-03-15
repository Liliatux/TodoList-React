import React, { Component } from 'react';
import AddList from './components/AddList';
import Filter from './components/Filter';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
         <AddList />
         <Filter />
         <List />
      </div>
    );
  }
}

export default App;
