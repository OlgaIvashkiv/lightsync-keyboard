import React, { useEffect } from "react";
import { StyledKeyItem } from '../styledKeys';

const GroupFItem = ({ item, id, color }) => {
    useEffect(() => {
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
  }, [color, id]);

    return (
        <StyledKeyItem color={ color }  id={ id }>
            { item }
        </StyledKeyItem>
    )
}

export default GroupFItem;