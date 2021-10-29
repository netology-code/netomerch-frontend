import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Examples from './components/Examples/Examples';
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={MainPage} />
      <Route path="/examples" component={Examples} />
    </Router>
  );
}

export default App;
