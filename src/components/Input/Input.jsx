import React, { useState } from 'react';
import Select from '../Select/Select';

const Input = () => {
    const [presetName, setPresetName] = useState('');

    const onSelectColorScheme = (e) => {
        setPresetName(e.target.value);
    }

    const onSavePreset = () => {
        const keys = JSON.parse(localStorage.getItem('keys')) || {};
        const oldPresets = JSON.parse(localStorage.getItem('presets')) || {};
        const newPreset = {...oldPresets, [presetName] : keys }
        localStorage.setItem( 'presets', JSON.stringify(newPreset));
        
    }

    return (
        <>
        <input type="text" name= "colorName" placeholder="color scheme name" onChange={onSelectColorScheme}/>
        <button onClick={onSavePreset}>
            Save preset
        </button>
        <Select />
         </>   
      
    )
}

export default Input;
