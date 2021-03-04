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



const AddTune = props => {
 
  const [ title, titleOnChange ] = useInput('');
  const [ composer, composerOnChange ] = useInput('');
  const [ keys, setKeys ] = useState({});
  const [ titleError, setTitleError ] = useState(null);
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

  const saveTune = () => {
    //if title is empty  
    if (title === '') {
      setTitleError('Title is required');
    }  

    const body = {
      title,
      composer,
      keys
    };
 
    fetch('/create/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {

      })
      .catch(err => {
        console.log('AddTune fetch /create ERROR: ', err);
      });

  };

  useEffect(()=>{
    setTitleError(null);
  }, [title]);

  
  const flat = '\u266D';
  const keyCheckboxes = ['A', 'B' + flat, 'C', 'D' + flat, 'D', 'E' + flat, 'E', 'F', 'G' + flat, 'G', 'A' + flat]
    .map((key, idx) => {
      return (
        <div key={idx} className="checkboxWithLabel">
          <input 
            type="checkbox" 
            className="keyCheckbox" 
            value={key} 
            onChange={handleKeyCheck}></input>
          <span className="checkboxLabel">{key}</span>
        </div>
      );   
    });

  return (
    <div className="mainAddTuneContainer">
      <section className="mainAddTuneSection">
        <h3>Add tune</h3>
        <div className="inputTitle">     
          <input name="title"
            placeholder="Title" 
            value={title} 
            onChange={titleOnChange} 
            className="input" />
          {titleError ? (<span className="errorMsg">{titleError}</span>) : null}
        </div>
        <div className="inputComposer">       
          <input 
            name="inputComposer" 
            placeholder="Composer" 
            value={composer} 
            onChange={composerOnChange}
            className="input" />
        </div>
        <div className="createTuneFields">
          <label htmlFor="keys">Keys: </label>
          <div className="keyCheckboxContainer">
            {keyCheckboxes}
          </div>
          <div className="addTuneButtons">         
            <Link to="/" className="backLink">
              <button 
                type="button" 
                className="btnSave" 
                onClick={saveTune}>
                Save
              </button>
            </Link>
            <Link to="/" className="backLink">
              <button 
                id="cancelButton" 
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

export default AddTune;