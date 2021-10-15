import styled from 'styled-components';

const StyledProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 6rem);
    height: auto;
    padding: 1rem 3rem;
    background: white;

    .profile__form--title {
        color: #128c7e;
        font-size: 16px;
        margin-bottom: 1.9rem;
        font-weight: 500;
    }
    .profile__form--container {
        display: flex;
        font-size: 16px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 2rem;
        margin: 0.8rem 0rem;
        color: #4A4A4A;
    }
    .profile__form--container--input {
        font-size: 16px;
        width: 80%;
        outline: none;
        font-size: 1.7rem;
        font-weight: 400;
        padding-bottom: 0.4rem;
    }
    .__border {
        border: none;
        border-bottom: 0.2rem solid #ff6457 !important;
    }
    .profile__form--container--icon {
        width: 10%;
        font-size: 1.7rem;
        text-align: right;
        color: rgba(0,0,0,0.3);
        cursor: pointer;
    }
`

export default StyledProfileForm;