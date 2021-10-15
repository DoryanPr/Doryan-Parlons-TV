import styled, {css} from 'styled-components';

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;

     ${props => props.OPVisible && css`
    width: 30%
    border
    `}
`

export default StyledRight;
