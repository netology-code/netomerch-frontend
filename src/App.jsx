import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Support from './components/Support/Support';
import './app.css';
import Product from './components/Product/Product';

function App() {
  return (
    <Router basename="/">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/catalog/:id" component={Product} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/support" component={Support} />
            <Route exact path="/" component={MainPage} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
