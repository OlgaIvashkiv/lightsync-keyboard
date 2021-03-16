import React from "react";
// import './GroupF.css';
import { StyledStrItem } from '../GroupStr/StyledStrItem';


const GroupFItem = ({item, id, color }) => {
    return (
        <StyledStrItem color={ color } onClick={ () => console.log('click', item, id)}>
            {item}
        </StyledStrItem>
    )
}

export default GroupFItem;