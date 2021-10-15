import styled, { css } from 'styled-components';

const StyledLeft = styled.div`
    background: #1a213f;
    box-shadow: 1px 0px 4px #1f1d24;
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
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 40%;
        z-index: 10;
        }
`;




/*
${props => props.OPVisible && css`
width: 30%;
`}
*/
export default StyledLeft;