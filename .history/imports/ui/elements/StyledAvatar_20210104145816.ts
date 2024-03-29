import styled, { css } from 'styled-components';

const StyledAvatar = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.avatar.color.bckground};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${props => props.large && css`
        width: 4.9rem;
        height: 4.9rem;
        border-radius: 4.45rem;
    `}
     ${props => props.big && css`
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
    `}

    .avatar--img {
        width: 100%;
        height: 100%;
    }
`

export default StyledAvatar;