import styled, { css } from 'styled-components';

const StyledHome = styled.div`

.home-link {
    color: white;
    display: flex;
    font-size: 22px;
    justify-content: center;
    margin-top: 80px;
    text-decoration: none;
    transition: color .3s ease-out;
}

    .home-link::before {
       content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        transform: translateY(calc(100% - 2px));
        width: 100%;
        height: 100%;
        background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
        transition: transform .25s ease-out;
    }

    .home-link:hover {
        color: #fff; 
    }

        .home-link:hover::before {
            transform: translateY(0);
            transition: transform .25s ease-out;
        }

.home-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledHome;