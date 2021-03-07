import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};
  

const UpdateKeys = props => {
 

  const [ keys, setKeys ] = useState({});
  //textfield for title
  //textfield for composer
  //bullet selection for keys
  //submit button
  const handleKeyCheck = e => {
    const idx = e.target.value;
    const newKeys = {...keys};
    if (newKeys[idx]) delete newKeys[idx];
    else newKeys[idx] = true;
    setKeys(newKeys);
  };
  
  const updateKeys = () => {
    //if title is empty  
  
    const body = {
      id: tune._id,  
      keys
    };

    //console.log('updateKeys body log============', body);
    fetch('/updateKeys/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        //console.log(data);
      })
      .catch(err => {
        console.log('UpdateKeys fetch /updateKeys/:' + tune._id + ' ERROR: ', err);
      });
  
  };
  

    
  const flat = '\u266D';
  const keyCheckboxes = ['A', 'B' + flat, 'B', 'C', 'D' + flat, 'D', 'E' + flat, 'E', 'F', 'G' + flat, 'G', 'A' + flat]
    .map((key, idx) => {
      return (
        <div 
          key={idx} 
          className="checkboxWithLabel">
          <input 
            type="checkbox" 
            className="keyCheckbox" 
            value={key} 
            onChange={handleKeyCheck}></input>
          <span 
            className="checkboxLabel">
            {key}
          </span>
        </div>
      );   
    });



  const tune = props.info.state.tuneInfo;

  return (
    <div 
      className="mainAddTuneContainer">
      <section 
        className="mainUpdateKeysSection">
        <h3>Update keys</h3>
        <h3 
          className="tuneTitle">        
          {tune.title}
        </h3>
        <h3 className="tuneComposer">        
          {tune.composer}
        </h3>
        <p 
          className="tuneCurrentKeys">
          {tune.keys.join(', ')}
        </p>
        <div 
          className="createTuneFields">
         
          <div 
            className="keyCheckboxContainer">
            {keyCheckboxes.slice(0, 6)}
            {keyCheckboxes.slice(6, 12)}
          </div>
          <div className="updateKeysButtons">         
            <Link to="/" className="backLink">
              <button 
                type="button" 
                className="btnUpdate" 
                onClick={updateKeys}>
                Update
              </button>
            </Link>
            <Link 
              to="/" 
              className="backLink">
              <button 
                type="button" 
                className="btnCancel">
                Cancel
              </button>
            </Link>
           
          </div>
        </div>
  
      </section>
    </div>  
  );
    
};
  
export default UpdateKeys;