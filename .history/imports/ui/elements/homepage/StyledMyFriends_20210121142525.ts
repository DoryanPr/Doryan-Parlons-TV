import styled, { css } from 'styled-components';

const StyledMyFriends = styled.div`

.friends-link {
    color: white;
    display: inline-block;
    font-size: 22px;
    justify-content: center;
    margin-bottom: 20px;
    opacity: 80%;
    text-decoration: none;
}

    .friends-link:hover {
        opacity: 100%;
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
    .friends-icon
`;

export default StyledMyFriends;