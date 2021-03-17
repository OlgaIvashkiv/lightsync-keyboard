import React from "react";
import { StyledKeyItem } from '../styledKeys';


const GroupFItem = ({ item, id, onClickKey }) => {

    const color = JSON.parse(localStorage.getItem('keys'))[id];
    return (
        <StyledKeyItem color={ color } onClick={ onClickKey } id={ id } >
            { item }
        </StyledKeyItem>
    )
};

export default GroupFItem;