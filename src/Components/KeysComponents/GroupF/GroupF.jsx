import React, { useState, useEffect } from "react";
import GroupFItem from "./GroupFItem.jsx";
import { arrayF, arrayNumber, arrayStr } from '../../../constants';
import { StyledKeysGroup } from '../styledKeys';

const arr = [...arrayF, ...arrayNumber, ...arrayStr]

const GroupF = ({ color, onClickKey, click }) => {
    const [colorKeys, setColorKeys] = useState({})

    // useEffect( () => {
    //     const keys = JSON.parse(localStorage.getItem('keys'));
    //     console.log(keys, 'keys from groupF');
    //     setColorKeys(keys);
    //
    // },[click]);

    return (
        <StyledKeysGroup>
            { arr.map( (item, index) =>
            <GroupFItem 
                item={ item } 
                key={ `${ item }__${ index }` } 
                id={ item } 
                color={ color }
                onClickKey= { onClickKey }
                colorKeys={ colorKeys }
                />) }
        </StyledKeysGroup>
    )
}

export default GroupF;