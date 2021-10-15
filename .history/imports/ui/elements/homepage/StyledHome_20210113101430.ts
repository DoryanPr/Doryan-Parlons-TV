import styled, { css } from 'styled-components';

const StyledHome = styled.div`

.home-link {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 22px;
    text-decoration: none;
    margin-top: 80px;
}

    .home-link::after {
        content: "";
        background: white;
        mix-blend-mode: exclusion;
        width: calc(100% + 20px);
        height: 0;
        position: absolute;
        bottom: -4px;
        left: -10px;
        transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

        .home-link:hover::after {
            height: calc(100% + 8px);
        }

.home-icon {
    margin: 7px 7px 0 0;
}
`;

export default StyledHome;