import React from "react";
import GroupFItem from "./GroupFItem.jsx";
import { arrayF } from '../../../constants';
import { StyledKeysGroup } from '../styledKeys';

const GroupF = ({ color }) => {

    return (
        <StyledKeysGroup>
            { arrayF.map( (item, index) => 
            <GroupFItem 
                item={ item } 
                key={ `${ item }__${ index }` } 
                id={ item } 
                color={ color }
                />) }
        </StyledKeysGroup>
    )
}

export default GroupF;