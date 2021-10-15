import styled, { css } from 'styled-components';

const StyledEmojis = styled.div`
    display: none;

     ${props => props.gifVisible && css`
        display: flex;
    `}
`

export default StyledEmojis;