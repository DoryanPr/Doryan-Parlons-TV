import styled, { css } from 'styled-components';

const StyledRight = styled.div`
    margin-left: 15%;
    width: 85%;

     ${props => props.OPVisible && css`
    width: 40%;
    border-right: 0.1rem solid rgba(0, 0, 0, 0.2);
    `}

   
`

export default StyledRight;
