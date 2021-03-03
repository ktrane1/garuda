import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tune from './Tune';


class Tunes extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      tunes: [],
    };

    //this.populateTunes = this.populateTunes.bind(this);
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


  render () {

    const tuneComponent = this.state.tunes.map((tune, idx) =>{
      return (<article>
        <Tune className="tune" key={idx} tuneInfo={tune} />
      </article>);
    });
    
  
   
    //return tunes 
    return (
      <div className='tunesContainer'>
        <div>
          <Link to="/create"><button type="button">Add tune</button></Link>
        </div>  
        {tuneComponent}
      </div>
    );
  }
}


export default Tunes;