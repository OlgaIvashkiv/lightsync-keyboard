import React from "react";
// import './GroupNumber.css';
import GroupNumberItem from "./GroupNumberItem";
import { StyledGroupNumber } from './StyledGroupNumber';

const arrayNumber = ['~', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'backspace'];
const GroupNumber = ({ color }) => {


    return (
        <StyledGroupNumber>
            {arrayNumber.map((item, index) => <GroupNumberItem 
                item={item} 
                key={`${item}__${index}`} 
                id={item} 
                color={ color }
                />)}
        </StyledGroupNumber>
    )
}

export default GroupNumber;