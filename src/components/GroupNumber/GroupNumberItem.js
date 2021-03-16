import React, { useEffect } from "react";
// import './GroupNumber.css';
import { StyledStrItem } from '../GroupStr/StyledStrItem';


const GroupNumberItem = ({ item, id, color }) => {
        useEffect(() => {
        console.log('effect');
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
  }, [color]);
    
    return (
        <StyledStrItem color={ color } onClick={ () => console.log('click', item, id)}>
            {item}
        </StyledStrItem>
    );
}

export default GroupNumberItem;