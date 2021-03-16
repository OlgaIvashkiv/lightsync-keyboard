import React, { useState } from "react";
import { StyledStrItem } from './StyledStrItem';

const GroupStrItem = ({item, id, color }) => {
    // const [color, setColor] = useState('');
    const onHandleClick = (e) => {
        console.log(e.target.attributes.color.value,id, 'event')
    };

    return (
        <StyledStrItem color={ color } onClick={ onHandleClick }>
            {item}
        </StyledStrItem>
    )
}

export default GroupStrItem;