import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 150px;
    height: 30px;
    margin-top: 10px;
    padding: 2px 15px 0;
    border: none;
    text-transform: uppercase;
`;

export const StyledButton = styled.button`
    width: 180px;
    height: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 2px 15px 0;
    border: none;
    text-transform: uppercase;
    background-color: #fff;

     &:hover {
        cursor: pointer;
        color: #0081ff;
        transition: color ease-in-out 0.3s;
}
`;