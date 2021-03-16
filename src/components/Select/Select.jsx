import React, { useState } from 'react';
import Option from './Option';

const Select = () => {
    const [preset, setPreset] = useState(['default']);

    const onSelectChange = () => {
        const presets = JSON.parse(localStorage.getItem('presets'));
        const newPresets = [...Object.keys(presets)]
        setPreset(newPresets);
    };

    return (
        <select onClick={ onSelectChange }>
            {
                preset.map((item, index) => <Option value={item} key={`${item}_${index}`}/>)
            }
            
        </select>
    )
}

export default Select;
