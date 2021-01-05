import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import styled from 'styled-components'


const AppProvider = styled.div`
    position: relative;
    z-index: 10;
    /* background: #050B2B; */
    margin-bottom: 100vh;
    background: #fff;
`;

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar />
      <AppProvider>
        <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/about'component={About} />
        </Switch>
      </AppProvider>
      <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
