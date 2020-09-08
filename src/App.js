import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>Hats</h1>
      {/* Hats{console.log(history)} */}
</div>
);

function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route  path='/hats' component={HatsPage}/>
      <Route/>
    </Switch>

    {/* <HomePage></HomePage> */}
  </div>
}

export default App;
