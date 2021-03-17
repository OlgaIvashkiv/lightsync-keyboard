import React from "react";
import GroupNumberItem from "./GroupNumberItem";
import { arrayNumber } from '../../../constants';
import { StyledKeysGroup } from '../styledKeys';

const GroupNumber = ({ color }) => {
    return (
        <StyledKeysGroup>
            { arrayNumber.map((item, index) => 
            <GroupNumberItem 
                item={ item } 
                key={ `${ item }__${ index }` } 
                id={ item } 
                color={ color }
                />) }
        </StyledKeysGroup>
    )
}

export default GroupNumber;