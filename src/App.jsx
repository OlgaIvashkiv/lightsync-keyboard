import React, { useState, useEffect } from 'react';
import { HuePicker } from 'react-color';

import Keyboard from "./Components/Keyboard/Keyboard.jsx";
import Input from './Components/Input/Input';
import { arrayF, arrayNumber, arrayStr } from './constants';

import './App.css';

const allKeysArray = [...arrayF, ...arrayNumber, ...arrayStr];
const defaultKeys = allKeysArray.map(button => {
    return {[button]: '#ffffff'}
});

// const defaultPreset = {default: ...defaultKeys};

const App = () => {
    const [color, setColor] = useState('#ffffff');
    const [click, setClick] = useState(false);

useEffect(() => {
    const defKeys = Object.assign(...defaultKeys);
    localStorage.setItem( 'keys', JSON.stringify(defKeys));
    localStorage.setItem('presets', JSON.stringify({default: defKeys}))
},[]);


const onClickKey = (e) => {

    const id = e.target.id;

    const obj = { [id]: color }
    const oldKeys = JSON.parse(localStorage.getItem('keys'));
    const newKeys = {...oldKeys, ...obj }
    localStorage.setItem( 'keys', JSON.stringify(newKeys));
    setClick(!click);
  
}

const onChangeColor = (color) => {
  setColor(color);
    setClick(!click);

};

const onInputColorChange = (e) => {
    const inputColor = e.target.value;
    console.log(inputColor, 'inputcolor');
    setColor(inputColor);
}

  return (
      <div className='app'>
        <input type='color' onChange={onInputColorChange} value={ color }/>
        <Keyboard click={click} onChangeColor={ onChangeColor } onClickKey={ onClickKey }/>
        <Input onChangeColor={ onChangeColor }/>
      </div>
  );
}

export default App;
