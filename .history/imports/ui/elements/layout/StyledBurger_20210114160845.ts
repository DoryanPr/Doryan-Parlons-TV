import styled from 'styled-components';

const StyledBurger = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    top: 5%;
    left: 2rem;
    position: absolute;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
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