import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Examples from './components/Examples/Examples';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename="/">
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/catalog" component={Catalog} />
      {/* <Route path="/examples" component={Examples} /> */}
      <Footer />
    </Router>
  );
}

export default App;
