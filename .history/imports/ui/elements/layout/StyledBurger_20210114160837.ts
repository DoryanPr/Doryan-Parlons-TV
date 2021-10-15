import styled from 'styled-components';

const StyledBurger = styled.button`
    background: transparent;
    border: none;
    top: 5%;
    display: flex;
    left: 2rem;
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default StyledBurger;