import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import EditProduct from './components/EditProducts';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import Header from './components/Header';
import axios from 'axios';


function App() {

  const [products, saveProducts] = useState([]);
  const [rechargeProducts, setrechargeProducts] = useState(true)

  useEffect(() => {
    if (rechargeProducts) {
      const checkApi = async () => {
        const response = await axios.get('http://localhost:4000/restaurant')
        saveProducts(response.data)
      }
      checkApi();
      setrechargeProducts(false);
    }
  }, [rechargeProducts]);

  return (
    <Router>
      <Header />
      <main className="container mt-5"></main>
      <Switch>
        <Route exact path="/new-product" render={() => (
          <AddProduct setrechargeProducts={setrechargeProducts}>

          </AddProduct>
        )}></Route>
        <Route exact path="/products" render={() => (
          <Products products={products}
          setrechargeProducts={setrechargeProducts}>
          </Products>
        )}>
        </Route>
        <Route exact path="/products/:id " component={Product}></Route>
        <Route exact path="/products/edit/:id" render={props => {
          const productId = parseInt(props.match.params.id);
          const product = products.filter(product => product.id === productId);
          console.log(productId)
          return (
            <EditProduct product={product[0]}
              setrechargeProducts={setrechargeProducts}></EditProduct>
          )
        }}></Route>
      </Switch>
      <p className="mt-4 p2 text-center">All rigths reserved</p>
    </Router>
  );
}

export default App;
