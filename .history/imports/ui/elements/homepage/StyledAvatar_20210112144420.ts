import styled, { css } from 'styled-components';

const StyledAvatar = styled.div`
height: 10rem;
cursor: pointer;
border-radius: 10rem;
display: flex;
position: relative;
overflow: hidden;
background-color: white;
justify-content: center;
align-items: end;
width: 10rem;

    ${props => props.large && css`
        width: 65px;
        height: 65px;
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
    .avatar--overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-size: 2.4rem;
    }
    .overlay--icon {
        margin-bottom: 1.3rem;
    }
    .overlay--text {
        font-size: 1.4rem;
    }
    input[type=file] {
        display: none;
    }
`

export default StyledAvatar;