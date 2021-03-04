import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row, Grid } from 'react-flexbox-grid';
//component for individual tune


const Tune = (props) => {

  return (
    <div>
      
      <Row className='singleTune'>
        <Col xs={1} md={5} id='tuneTitle'>
          {props.tuneInfo.title}   
        </Col>
        <Col xs={6} md={3} id='tuneComposer'>
          {props.tuneInfo.composer}   
        </Col>
        <Col xs={6} md={3} id='tuneKeys'>
          {props.tuneInfo.keys.join(', ')}   
        </Col>
        <Link to={{
          pathname: '/updateKeys',
          state: {
            tuneInfo: props.tuneInfo,
          }
        }} className="backLink" tuneInfo={props.tuneInfo}>
          <button id="updateButton" type="button" className="btnUpdateKeys" >
            Update keys
          </button>
        </Link>
        <Link to="/" className="backLink">
          <button id="removeButton" type="button" className="btnRemove" 
            onClick={
              () => 
                props.removeTuneFunc(props.tuneInfo._id)}>
                Remove
          </button>
        </Link>
      </Row>
      <hr></hr>
    </div>
  );
};

export default Tune;