import styled, { css } from 'styled-components';

const StyledMSG = styled.div`

.msg-link {
    color: white;
    display: inline-block;
    justify-content: center;
    font-size: 22px;
    justify-content: center;
    margin-left: 20px;
    text-decoration: none;
}

 .msg-link::after {
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

.msg-icon {
    padding: 11px;
}
`;

export default StyledMSG;