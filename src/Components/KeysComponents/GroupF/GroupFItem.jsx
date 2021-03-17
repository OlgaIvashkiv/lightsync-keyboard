import React, { useEffect } from "react";
import { StyledKeyItem } from '../styledKeys';


const GroupFItem = ({ item, id, onClickKey, colorKeysArray, coloritem }) => {
  //   useEffect(() => {
  //       const oldKeys = JSON.parse(localStorage.getItem('keys')) || {};
  //       const newKeys = {...oldKeys, [id] : color }
  //       localStorage.setItem( 'keys', JSON.stringify(newKeys));
  // }, [color, id]);
    const color = JSON.parse(localStorage.getItem('keys'))[id];
    console.log(color,'color')
    return (
        <StyledKeyItem color={ color } onClick={ onClickKey } id={ id } style={{borderColor : 'red'}}>
            { item }
        </StyledKeyItem>
    )
};

export default GroupFItem;