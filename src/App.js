import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import EditProduct from './components/EditProducts';
import AddProduct from './components/AddProduct';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/new-product" component={AddProduct}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/products/:id " component={Product}></Route>
        <Route exact path="/productos/editar/:id" component={EditProduct}></Route>
      </Switch>
    </Router>
  );
}

export default App;
