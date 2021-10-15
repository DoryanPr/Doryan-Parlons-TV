import styled from 'styled-components';

const StyledGridGif = styled.div`
    display: none;

     ${props => props.fabVisible && css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `}
`

export default StyledGridGif;