import React, { useState } from 'react';
import SelectComponent from '../Select/Select';

import { StyledInput, StyledButton } from './styles';

const Input = ({ onChangeColor }) => {
    const [presetName, setPresetName] = useState('');
    const [enteredText, setEnteredText] = useState('');

    const onSelectColorScheme = (e) => {
        setEnteredText(e.target.value)
        setPresetName(e.target.value);
    }

    const onSavePreset = () => {
        const keys = JSON.parse(localStorage.getItem('keys')) || {};
        const oldPresets = JSON.parse(localStorage.getItem('presets')) ||  {};
        const newPreset = {...oldPresets, [presetName] : keys }
        localStorage.setItem( 'presets', JSON.stringify(newPreset));
        setEnteredText('');
    }

    return (
        <>
            <StyledInput type="text"
                         name= "colorName"
                         placeholder="enter scheme name"
                         onChange={ onSelectColorScheme }
                         value={ enteredText }
            />
            <StyledButton onClick={ onSavePreset }>
                Save preset
            </StyledButton>
            <SelectComponent onChangeColor={ onChangeColor }/>
        </>

    )
}

export default Input;