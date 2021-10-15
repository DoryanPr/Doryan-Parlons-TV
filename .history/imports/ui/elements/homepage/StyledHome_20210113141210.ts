import styled, { css } from 'styled-components';

const StyledHome = styled.div`

.home-link {
    color: white;
    display: flex;
    font-size: 22px;
    justify-content: center;
    margin-top: 80px;
    text-decoration: none;
}

    .home-link::before {
      
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