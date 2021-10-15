import styled, {css} from 'styled-components';

const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(#2AB992, #02A592);
    box-shadow: 5px 0px 20px yellowgreen
}
    width: 15%;
    

    `;
    /*
    ${props => props.OPVisible && css`
    width: 30%;
    `}
    */
export default StyledLeft;