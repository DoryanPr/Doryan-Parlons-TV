import styled from 'styled-components';

const StyledGridGif = styled.div`
    display: none;

     ${props => props.fabVisible && css`
        display: flex;
    `}
`

export default StyledGridGif;