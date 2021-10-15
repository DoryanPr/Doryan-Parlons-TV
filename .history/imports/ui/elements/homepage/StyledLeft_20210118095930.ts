import styled, { css } from 'styled-components';

const StyledLeft = styled.div`
    background: linear-gradient(#2AB992, #02A592);
    box-shadow: 1px 0px 20px #1F1D24;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: fixed;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    width: 15%;

    ${props => props.open && css`
        transform: translateX(0);
    `}
    
`;


@media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
    */

/*
${props => props.OPVisible && css`
width: 30%;
`}
*/
export default StyledLeft;