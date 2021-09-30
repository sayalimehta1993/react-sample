import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import TabsData from './components/Tabs';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TabsData />
      </div>
    );
  }
}

export default App;
