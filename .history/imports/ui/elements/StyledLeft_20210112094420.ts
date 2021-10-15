import styled, {css} from 'styled-components';

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(blue, white);
}
    width: 15%;
    

    `;
    /*
    ${props => props.OPVisible && css`
    width: 30%;
    `}
    */
export default StyledLeft;