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

    .home-link::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: white;
      transition: width .3s;
    }

    .home-link:hover::after {
        width: 100%
    }

        .home-link:hover::before {
           
        }

.home-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledHome;