import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import './app.css';
import ParentElement from './components/ParentElement/ParentElement';
import Product from './components/Product/Product';
import Catalog from './components/Catalog/Catalog';
import Cart from './components/Cart/Cart';
import Support from './components/Support/Support';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Router basename="/">
      <ParentElement>
        <Switch>
          <Route path="/catalog/:id" component={Product} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/cart" component={Cart} />
          <Route path="/support" component={Support} />
          <Route path="/notfaund" component={Error404} />
          <Route exact path="/" component={MainPage} />
          <Route path="*">
            <Redirect to="/notfaund" />
          </Route>
        </Switch>
      </ParentElement>
    </Router>
  );
}

export default App;
