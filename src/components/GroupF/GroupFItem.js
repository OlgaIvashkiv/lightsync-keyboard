import React, { useEffect } from "react";
// import './GroupF.css';
import { StyledStrItem } from '../GroupStr/StyledStrItem';


const GroupFItem = ({item, id, color }) => {
    useEffect(() => {
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
  }, [color]);

    return (
        <StyledStrItem color={ color } onClick={ () => console.log('click', item, id)}>
            {item}
        </StyledStrItem>
    )
}

export default GroupFItem;