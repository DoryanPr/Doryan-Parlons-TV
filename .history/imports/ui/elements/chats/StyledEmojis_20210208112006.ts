import styled, { css } from 'styled-components';

const StyledEmojis = styled.div`
    display: none;

     ${props => props.emojiVisible && css`
        display: flex;
    `}
`

export default StyledEmojis;