import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import styled from 'styled-components'
import { AppProvider } from './theme/globalStyle'
import Shop from './components/layout/Shop';
import Cart from './components/layout/Cart';
import ProductDetail from './components/layout/Product Detail/ProductDetail';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <AppProvider id='background'>
        <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/about'component={About} />
            <Route path='/shop'component={Shop} />
            <Route path='/cart'component={Cart} />
            <Route path='/product/:productId'component={ProductDetail} />
        </Switch>
      </AppProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
