import styled from 'styled-components';

const StyledBurger = styled.button`
    background: red;
    border: none;
    cursor: pointer;
    display: none;
    flex-direction: column;
    height: 2rem;
    justify-content: space-around;
    padding: 0;
    position: absolute;
    right: 0;
    top: 5%;
    width: 2rem;
    z-index: 10;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
    }

    &:focus {
        outline: none;
    }
  
  div {
      background: ${({ theme }) => theme.primaryLight};
      border-radius: 10px;
      height: 0.25rem;
      position: relative;
      transition: all 0.3s linear;
      transform-origin: 1px;
      width: 2rem;

       :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
            }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
  }
`;

export default StyledBurger;