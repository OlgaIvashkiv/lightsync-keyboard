import React, { useState } from "react";
import { StyledStrItem } from './StyledStrItem';

const GroupStrItem = ({item, id, color }) => {
    // const [color, setColor] = useState('')

    return (
        <StyledStrItem color={ color } onClick={ () => console.log('click', item, id)}>
            {item}
        </StyledStrItem>
    )
}

export default GroupStrItem;