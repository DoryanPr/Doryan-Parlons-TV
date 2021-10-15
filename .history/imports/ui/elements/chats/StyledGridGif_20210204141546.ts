import styled, { css } from 'styled-components';

const StyledGridGif = styled.div`
    display: none;

     ${props => props.gifVisible && css`
        display: flex;
    `}
`

export default StyledGridGif;