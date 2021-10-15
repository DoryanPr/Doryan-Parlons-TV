import styled from 'styled-components';

const StyledBurger = styled.button`
    background: #1a213f;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    display: none;
    flex-direction: column;
    height: 32px;
    justify-content: space-around;
    padding: 0;
    position: fixed;
    right: 20px;
    top: 220px;
    z-index: 10;
    width: 34px;
    padding: 5px 7px;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
    }

    &:focus {
        outline: none;
    }
  
    div {
        background: white;
        border-radius: 10px;
        height: 0.25rem;
        left: ${({ open }) => open ? '1px' : '0'};
        position: relative;
        transition: transform 0.3s linear;
        transform-origin: 1px;
        width: 100%;
        width: ${({ open }) => open ? '23px' : '100%'};

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