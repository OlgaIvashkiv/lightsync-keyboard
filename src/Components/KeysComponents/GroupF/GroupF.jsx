import React, { useState, useEffect } from "react";
import GroupFItem from "./GroupFItem.jsx";
import { arrayF, arrayNumber, arrayStr } from '../../../constants';
import { StyledKeysGroup } from '../styledKeys';

const arr = [...arrayF, ...arrayNumber, ...arrayStr]

const GroupF = ({ onClickKey }) => {

    return (
        <StyledKeysGroup>
            { arr.map( (item, index) =>
                <GroupFItem
                    item={ item }
                    key={ `${ item }__${ index }` }
                    id={ `${ item }_${ index }`}
                    onClickKey= { onClickKey }
                />

            ) }
        </StyledKeysGroup>
    )
}

export default GroupF;