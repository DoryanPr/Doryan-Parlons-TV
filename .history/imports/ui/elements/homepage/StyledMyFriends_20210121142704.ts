import styled, { css } from 'styled-components';

const StyledMyFriends = styled.div`

.friends-link {
    color: white;
    display: inline-block;
    font-size: 19px;
    justify-content: center;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    opacity: 80%;
    text-decoration: none;
}

    .friends-link:hover {
        opacity: 100%;
    }

    .friends-link::after {
        background: #ff6457;
        content: "";
        display: block;
        height: 2px;
        left: 39px;
        transition: width .3s;
        position: relative;
        width: 0;
        }

        .friends-link:hover::after {
            background: #ff6457;
            left: 39px;
            position: relative;
            transition: width .3s;
            -webkit-transition: width .3s;
            width: calc(100% - 39px);
        }

.friends-icon {
    background: #ff6457;
    border-radius: 100%;
    font-size: 15px;
    height: 30px;
    margin: 0 7px 0 0;
    padding: 5px;
    position: relative;
    text-align: center;
    top: -4px;
    width: 30px;
}
    .friends-icon:before {
         position: relative;
    top: 2px;
    }
`;

export default StyledMyFriends;