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
    localStorage.setItem('keys', JSON.stringify(foundPreset));

    console.log(foundPreset, 'foundpreset');
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
