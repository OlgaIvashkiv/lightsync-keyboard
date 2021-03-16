import React, { useEffect } from "react";
import { StyledStrItem } from './StyledStrItem';

const GroupStrItem = ({ item, id, color }) => {
    useEffect(() => {
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
  }, [color]);

    const onHandleClick = (e) => {
        console.log(e.target.attributes.color.value,id, 'event')
    };

    return (
        <StyledStrItem color={ color } onClick={ onHandleClick }>
            { item }
        </StyledStrItem>
    )
}

export default GroupStrItem;