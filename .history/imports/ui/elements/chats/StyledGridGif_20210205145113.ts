import styled, { css } from 'styled-components';

const StyledGridGif = styled.div`
    display: none;

     ${props => props.gifVisible && css`
        border: solid 1px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 15px;
        width: 820px;
        height: 400px;
    `}
`

export default StyledGridGif;