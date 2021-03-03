import React, { Component } from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';

import AddTune from './components/AddTune';
import Tunes from './components/Tunes';
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