
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Resultcontianer from './Components/Resultcontianer';
import Searchbox from './Components/Searchbox';


function App() {
  const name = require('@rstacruz/startup-name-generator');

  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (text) => {
    if (text.length > 0) {

      setSuggestedNames(name(text))
    }
    else {
      setSuggestedNames([])
    }
  }

  return (
    <div className="App">
      <Header />
      <Searchbox onInputChnage={handleInputChange} />
      <Resultcontianer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
