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

    .msg-link:hover::after {
        width: 100%;
        transition: width .3s;
    }

.msg-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledMSG;