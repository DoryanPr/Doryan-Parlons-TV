import styled, { css } from 'styled-components';

const StyledHome = styled.div`

.home-link {
    color: white;
    display: inline-block;
    font-size: 19px;
    justify-content: center;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
    margin-top: 20%;
    opacity: 80%;
    text-decoration: none;
}
    .home-link:hover {
        opacity: 100%;
    }

        .home-link::after {
        background: #ff6457;
        content: "";
        display: block;
        height: 2px;
        left: 39px;
        position: relative;
        transition: width .3s;
        width: 0;
        }

        .home-link:hover::after {
            background: #ff6457;
            left: 39px;
            position: relative;
            transition: width .3s;
            -webkit-transition: width .3s;
            width: calc(100% - 39px);
        }

            .home-link:hover::before {
            
            }

.home-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledHome;