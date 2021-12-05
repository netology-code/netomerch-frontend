import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Examples from './components/Examples/Examples';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename="/">
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/examples" component={Examples} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
