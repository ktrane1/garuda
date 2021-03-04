import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
//component for individual tune


const Tune = (props) => {

  const refreshTunes = () => {
    window.location.reload(false);
  };
  
  


  return (
    <div>
      
      <div className='singleTune'>
        <div id='tuneTitle'>
          {props.tuneInfo.title}   
        </div>
        <div id='tuneComposer'>
          {props.tuneInfo.composer}   
        </div>
        <div id='tuneKeys'>
          {props.tuneInfo.keys.join(', ')}   
        </div>
        <Link to="/" className="backLink">
          <button id="removeButton" type="button" className="btnRemove" 
            onClick={
              () => 
                props.removeTuneFunc(props.tuneInfo._id)
            }>
                Remove
          </button>
        </Link>
      </div>
      <hr></hr>
    </div>
  );
};

export default Tune;