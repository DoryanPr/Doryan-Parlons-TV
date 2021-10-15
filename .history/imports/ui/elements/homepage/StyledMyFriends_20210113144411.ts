import styled, { css } from 'styled-components';

const StyledMyFriends = styled.div`

.friends-link {
    color: whitesmoke;
    display: inline-block;
    font-size: 22px;
    justify-content: center;
    margin-left: 20px;
    opacity: 40%
    text-decoration: none;
}
    
    .friends-link::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: white;
        transition: width .3s;
        }

        .friends-link:hover::after {
            width: 100%;
            transition: width .3s;
        }

.friends-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledMyFriends;