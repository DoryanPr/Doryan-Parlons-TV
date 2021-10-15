// Menu.styled.js
import styled from 'styled-components';

const StyledMenu = styled.nav`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .menu-logo {
        margin: 20px;
    }

    .menu-connection {
        color: #ff6457;
        text-decoration: none;
        background-color: transparent;
    }

    ..menu-connection:hover {
        text-decoration: none;
    }
`
export default StyledMenu;