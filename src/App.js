import React from 'react';
import './App.css';

import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Error from './components/Error'
import {Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoom}/>
      <Route component={Error}/> 

      </Switch>
      
      
    </React.Fragment>
  );
}

export default App;
