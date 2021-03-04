import React, { Component } from 'react';
import { Switch, Route, Router, Link, useLocation } from 'react-router-dom';

import AddTune from './components/AddTune';
import Tunes from './components/Tunes';
import UpdateKeys from './components/UpdateKeys';
import './scss/styles.scss';

class App extends Component {
  
  //create button to take to addTune
  render(){
    return (
      <div className="router">

        <main>

          <Switch >
            <Route
              exact
              path="/"
              component={
                () => <Tunes />
              }>         
            </Route>
            <Route
              exact
              path="/updateKeys"
              component={
                () => <UpdateKeys info={useLocation()}/>
              }>         
            </Route>        
            <Route
              exact
              path="/create"
              component={
                () => <AddTune />
              }>         
            </Route>        
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;