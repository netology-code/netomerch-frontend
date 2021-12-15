import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Examples from './components/Examples/Examples';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';
import './app.css';

function App() {
  return (
    <Router basename="/">
      <Route exact path="/error" component={Error404} />
      <div className="wrapper">
        <Header />
        <main className="main">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/catalog" component={Catalog} />
          {/* <Route path="/examples" component={Examples} /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
