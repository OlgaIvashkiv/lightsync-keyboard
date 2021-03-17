import React, { useEffect } from "react";
import { StyledKeyItem } from '../styledKeys';

const GroupStrItem = ({ item, id, color }) => {
    // const [clicked, setClicked]

    useEffect(() => {
        const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
        const newKeys = {...oldKeys, [id] : color }
        localStorage.setItem( 'keys', JSON.stringify(newKeys));
        const presets = JSON.parse(localStorage.getItem('presets')) ||  {'default' : oldKeys};
        localStorage.setItem( 'presets', JSON.stringify(presets));
  }, [color, id]);

    const onHandleClick = (e) => {
        console.log(e.target, 'event from groupstritem')
    };

    return (
        <StyledKeyItem color={ color } onClick={ onHandleClick }>
            { item }
        </StyledKeyItem>
    )
}

export default GroupStrItem;