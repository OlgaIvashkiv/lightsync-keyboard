import React, { useState } from "react";
import GroupF from "../KeysComponents/GroupF/GroupF.jsx";
import GroupNumber from "../KeysComponents/GroupNumber/GroupNumber.jsx";
import GroupStr from "../KeysComponents/GroupStr/GroupStr.jsx";
import { StyledKeyboard } from './StyledKeyboard';

const Keyboard = ({ color, onChangeColor, onClickKey }) => {

    return (
        <StyledKeyboard color={ color } >
            <GroupF color={ color } onClickKey= { onClickKey } />
            <GroupNumber color={ color } onChangeColor= { onChangeColor } />
            <GroupStr color={ color } onChangeColor= { onChangeColor }/>
        </StyledKeyboard>
    )
}

export default Keyboard;