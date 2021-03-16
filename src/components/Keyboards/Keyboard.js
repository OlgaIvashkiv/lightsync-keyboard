import React from "react";
// import './Keyboard.css';
import GroupF from "../GroupF/GroupF";
import GroupNumber from "../GroupNumber/GroupNumber";
import GroupStr from "../GroupStr/GroupStr";
import { StyledKeyboard } from './StyledKeyboard';

const Keyboard = ({ color }) => {
    return (
        <StyledKeyboard color={ color }>
            <GroupF color={ color }/>
            <GroupNumber color={ color }/>
            <GroupStr color={ color }/>
        </StyledKeyboard>
    )
}

export default Keyboard;