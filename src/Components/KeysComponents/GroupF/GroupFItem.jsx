import React from "react";
import { StyledKeyItem } from '../styledKeys';

const GroupFItem = ({ item, id, onClickKey }) => {
    const [color, setColor] = React.useState('#ffffff');

    React.useEffect(() => {
        setColor(JSON.parse(localStorage.getItem('keys'))[id]);

    }, [item]);
    return (
        <StyledKeyItem color={ color } onClick={ onClickKey } id={ id } >
            { item }
        </StyledKeyItem>
    )
};

export default GroupFItem;