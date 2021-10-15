import styled, { css } from 'styled-components';

const StyledEmojis = styled.div`
    display: none;

     ${props => props.emojisVisible && css`
        display: flex;
    `}
`

export default StyledEmojis;