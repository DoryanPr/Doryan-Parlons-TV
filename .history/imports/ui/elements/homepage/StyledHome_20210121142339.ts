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
            width: 100%;
            transition: width .3s;
        }

            .home-link:hover::before {
            
            }

.home-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledHome;