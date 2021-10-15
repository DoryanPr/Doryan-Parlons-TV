import styled, { css } from 'styled-components';

const StyledEmojis = styled.div`
    display: none;

     ${props => props.gifVisible && css`
        border: solid 1px;
        display: flex;
        
    `}
`

export default StyledEmojis;