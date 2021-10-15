import styled from 'styled-components';

const StyledGridGif = styled.div`
    display: none;

     ${props => props.Visible && css`
        display: flex;
    `}
`

export default StyledGridGif;