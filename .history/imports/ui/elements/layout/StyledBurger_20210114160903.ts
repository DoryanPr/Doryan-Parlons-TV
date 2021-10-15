import styled from 'styled-components';

const StyledBurger = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    left: 2rem;
    position: absolute;
    top: 5%;
    width: 2rem;
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