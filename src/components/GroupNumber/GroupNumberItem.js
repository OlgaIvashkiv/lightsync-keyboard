import React from "react";
// import './GroupNumber.css';
import { StyledStrItem } from '../GroupStr/StyledStrItem';


const GroupNumberItem = ({ item, id, color }) => {
    return (
        <StyledStrItem color={ color } onClick={ () => console.log('click', item, id)}>
            {item}
        </StyledStrItem>
    );
}

export default GroupNumberItem;