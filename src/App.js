import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import TabsData from './components/Tabs';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <TabsData />
        </Container>
      </div>
    );
  }
}

export default App;
