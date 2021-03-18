import React, { useState } from 'react';
import { HuePicker } from 'react-color';

import Keyboard from "./Components/Keyboard/Keyboard.jsx";
import Input from './Components/Input/Input';

import './App.css';

const App = () => {
    const [color, setColor] = useState('#fff');

    const onChangeColor = (color) => {
      setColor(color);
    }

  return (
      <div className='app'>
        <HuePicker 
        color={ color }
        onChange={ updatedColor => setColor(updatedColor.hex) }
      />
        <Keyboard color={ color } onChangeColor={ onChangeColor } />
        <Input onChangeColor={ onChangeColor }/>
      </div>
  );
}

export default App;
