import React from "react";
import uniqid from 'uniqid';
import GroupFItem from "./GroupFItem";
import { StyledGroupNumber } from '../GroupNumber/StyledGroupNumber';

const arrayF = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12' ]
const GroupF = ({ color }) => {

    return (
        <StyledGroupNumber>
            {arrayF.map( (item, index) => <GroupFItem item={item} key={`${item}__${index}`} id={item} color={ color }/>)}
        </StyledGroupNumber>
    )
}

export default GroupF;