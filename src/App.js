import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.componenet';


function App() {
  return <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route/>
    </Switch>

    {/* <HomePage></HomePage> */}
  </div>
}

export default App;
