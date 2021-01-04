import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar />
      <Switch>
          <Route exact path='/'component={Home} />
          <Route path='/about'component={About} />
      </Switch>
      <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
