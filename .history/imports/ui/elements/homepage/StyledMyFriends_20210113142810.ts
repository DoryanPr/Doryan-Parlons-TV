import styled, { css } from 'styled-components';

const StyledMyFriends = styled.div`

.friends-link {
    color: white;
    display: inline-block;
    font-size: 22px;
    justify-content: center;
    margin-left: 20px;
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
        width: 100%;
        transition: width .3s;
    }
.friends-icon {
    padding: 11px;
}
`;

export default StyledMyFriends;