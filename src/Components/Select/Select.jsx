import React, { useState } from 'react';

import Option from './Option';

const SelectComponent = ({ onChangeColor }) => {
    const [presetsName, setPresetsName] = useState(['default']);

    const onSelectClick = () => {
        const presets = JSON.parse(localStorage.getItem('presets'));
        const newPresets = [...Object.keys(presets)]
        setPresetsName(newPresets);
    };

    const onChangeOption = (e) => {
        const preset = e.target.value;
        const presets = JSON.parse(localStorage.getItem('presets'));
    const foundPreset = presets[preset];
    const colors = Object.values(foundPreset);
    
    onChangeColor(colors[0])
    };

    return (
        <select onClick={ onSelectClick } onChange={ onChangeOption } >
            {
                presetsName.map((item, index) => 
                <Option value={ item } key={ `${ item }_${ index }` }/>)
            }
            
        </select>
    )
}

export default SelectComponent;
