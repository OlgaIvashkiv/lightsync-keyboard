import React, { useEffect } from "react";
import { StyledKeyItem } from '../styledKeys';


const GroupNumberItem = ({ item, id, color }) => {
        useEffect(() => {
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
  }, [color, id]);
    
    return (
        <StyledKeyItem color={ color } onClick={ () => console.log('click', color, id) }>
            { item }
        </StyledKeyItem>
    );
}

export default GroupNumberItem;