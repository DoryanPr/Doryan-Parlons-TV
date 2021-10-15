import styled, { css } from 'styled-components';

const StyledHome = styled.div`

.home-link {
    color: grey;
    display: inline-block;
    font-size: 22px;
    justify-content: center;
    margin-top: 20%;
    margin-left: 20px;
    text-decoration: none;
}
    .home-link:hover

    .home-link::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: white;
      transition: width .3s;
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