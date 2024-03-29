import styled, { css } from 'styled-components';

const StyledCards = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    border-right: ${({ theme }) => '0.1rem solid ' + theme.left.color.borderRight};

    ${props => props.OPVisible && css`
    width: 30%;
    `}
`;

export default StyledCards;