import React from "react";
import GroupStrItem from "./GroupStrItem";
import { arrayStr } from '../../../constants';
import { StyledKeysGroup } from '../styledKeys';

const GroupStr = ({ color }) => {
   
    return (
        <StyledKeysGroup>
            { arrayStr.map((item, index) => 
            <GroupStrItem 
                        item={ item } 
                        key={ `${ item }__${ index }` } 
                        id={ item } 
                        color={ color }
                        />) }
        </StyledKeysGroup>
    )
}

export default GroupStr;