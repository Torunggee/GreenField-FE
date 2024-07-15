import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header>
      <Route exact path = "/" component = {Home}/>
      </Header>
        
    </Router>
  );
}

export default App;
