import styled from 'styled-components';

export const StyledStrItem = styled.div.attrs(props => ({
    style: {
      borderColor: props.color,
    },
  }))`
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
    box-shadow: 0px 0px 0px 1px;

    &:nth-child(43){
        flex: 1
    }
    
    &:hover {
    box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
    -webkit-box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
    -moz-box-shadow: 1px -1px 4px 2px rgba(166,166,166,0.75) inset;
}
`