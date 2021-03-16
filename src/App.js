import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import Keyboard from "./components/Keyboard/Keyboard";

import './App.css';
import Input from './components/Input/Input';
import Select from './components/Select/Select';


function App() {
const [color, setColor] = useState('#fff');

  return (
      <div className='app'>
        <HuePicker 
        color={ color } 
        onChange={ updatedColor => setColor(updatedColor.hex) }
      />
        <Keyboard color={ color }/>
        <Input color={ color } />
        <Select />
      </div>
  );
}

export default App;
