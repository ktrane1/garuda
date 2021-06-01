import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Grid } from 'react-flexbox-grid';
import Tune from './Tune';


class Tunes extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      tunes: [],
    };

    this.removeTune = this.removeTune.bind(this);
    this.updateKeys = this.updateKeys.bind(this);
  }

  componentDidMount () {
    //fetch request to get tunes list
    fetch('/gettunes')
      .then(data => data.json())
      .then(tunes => {
        this.setState({
          tunes: [...tunes],
        });
   
      })
      .catch(err => {
        console.log('Error fetching from /gettunes, please resolve: ', err);
      });
  }

  removeTune (id)  {

    fetch('/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({id: id})
    })
      .then(resp => resp.json())
      .then(tunes => {
        this.setState({
          tunes: [...tunes],
        });
      })
      .catch(err => {
        console.log('remoteTune fetch /remove ERROR: ', err);
      });
      
  }

  render () {

    const tuneComponent = this.state.tunes.map((tune, idx) =>{
      return (
        <article key={idx} className='tuneArticle'>
          <Tune 
            className="tune" 
            key={'tune' + idx} 
            tuneInfo={tune} 
            removeTuneFunc={this.removeTune} 
            updateKeysFunc={this.updateKeys} />
        </article>);
    });
    
  
   
    //return tunes 
    return (
      <div>
        <div className="addButtonDiv">
          <Link to="/create">
            <button 
              type="button" 
              className="addButton">
              Add tune
            </button>
          </Link>
        </div>  
        <Grid fluid className='tunesContainer'>
          {tuneComponent}
        </Grid>
       
      </div>
    );
  }
}


export default Tunes;
