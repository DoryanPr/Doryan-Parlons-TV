import styled, { css } from 'styled-components';

const StyledRightMessages = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;

     ${props => props.OPVisible && css`
    width: 40%;
    border-right: 0.1rem solid rgba(0, 0, 0, 0.2);
    `}
`

export default StyledRight;
