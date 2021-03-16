import React from "react";
import GroupStrItem from "./GroupStrItem";
import { StyledGroupStr } from './StyledGroupStr';
import uniqid from 'uniqid';
// import './GroupStr.css';

 const arrayStr = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'caps lock', 'a', 's', 'd',
        'f', 'g','h', 'j', 'k', 'l', ';', '"', 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/',
        'ctrl', 'fn', 'wind', 'alt', 'space', 'alt', 'fn', 'ctrl'
    ];

const GroupStr = ({ color }) => {
   

    return (
        <StyledGroupStr>
            {arrayStr.map((item, index) => <GroupStrItem item={item} key={`${item}__${index}`} id={uniqid()} color={ color }/>)}
        </StyledGroupStr>
    )
}

export default GroupStr;