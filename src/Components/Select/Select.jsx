import React, { useState } from 'react';

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
                    <option value={ item } key={ `${ item }_${ index }` }> { item } </option>)
            }

        </select>
    )
}

export default SelectComponent;