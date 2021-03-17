import React, { useState, useEffect } from 'react';
import { HuePicker } from 'react-color';

import Keyboard from "./Components/Keyboard/Keyboard.jsx";
import Input from './Components/Input/Input';

import './App.css';


const App = () => {
    const [color, setColor] = useState('#fff');
    const [newColor, setNewColor] = useState({id: '#fff'});
    const [id, setId] = useState('');

useEffect(() => {

    const keys = JSON.parse(localStorage.getItem('keys')) || {};
    const newKeys = {...keys, ...newColor}
    localStorage.setItem( 'keys', JSON.stringify(newKeys));


  },[newColor]);

const onClickKey = (e) => {
    const id = e.target.id;
    setId(id);

    setNewColor(prev => ({
                ...prev,
                [id]: color
            }));
  
}
console.log(newColor, 'newcolor')

const onChangeColor = (color) => {
  setColor(color);
}

  return (
      <div className='app'>
        <HuePicker 
        color={ color } 
        newColor = { newColor }
        onChange={ updatedColor => setColor(updatedColor.hex) }
      />
        <Keyboard color={ color } onChangeColor={ onChangeColor } onClickKey={ onClickKey }/>
        <Input onChangeColor={ onChangeColor }/>
      </div>
  );
}

export default App;
