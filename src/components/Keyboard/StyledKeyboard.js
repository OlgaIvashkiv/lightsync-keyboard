import styled from 'styled-components';

export const StyledKeyboard = styled.div`
    background-color: #ffffff;
    padding: 25px;
    width: 700px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;


&.btn {
    border: 2px solid #9A9A9A;
    border-radius: 6px;
    padding: 0 15px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: box-shadow .5s;
    text-transform: uppercase;
    box-shadow: 0px 0px 0px 2px;
    border-color: ${props => props.color};
    // -webkit-box-shadow: 0px 0px 0px 2px ${props => props.color};
    // -moz-box-shadow: 0px 0px 0px 2px ${props => props.color};
}

&.btn:hover {
    box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
    -webkit-box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
    -moz-box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
}

`