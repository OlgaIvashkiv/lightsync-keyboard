import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import Keyboard from "./components/Keyboards/Keyboard";

import './App.css';


function App() {
const [color, setColor] = useState('#fff');

  return (
      <div className='app'>
        <HuePicker 
        color={ color } 
        onChange={ updatedColor => setColor(updatedColor.hex) }
      />
        <Keyboard color={ color }/>
      </div>
  );
}

export default App;
