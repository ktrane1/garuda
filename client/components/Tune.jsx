import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
//component for individual tune
const Tune = (props) => {


  console.log('tune props----------', props);

  return (
    <div className='singleTune'>
      <div id='tuneTitle'>
        {props.tuneInfo.title}   
      </div>
      <div id='tuneComposer'>
        {props.tuneInfo.composer}   
      </div>
      <div>
        {props.tuneInfo.keys.join(', ')}   
      </div>
    </div>
  );
};

export default Tune;