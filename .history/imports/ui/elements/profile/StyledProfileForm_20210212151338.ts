import styled from 'styled-components';

const StyledProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 6rem);
    height: auto;
    padding: 1rem 3rem;
    background: white;

    .profile__for--title {
        color: #128c7e;
        font-size: 1.4rem;
        margin-bottom: 1.9rem;
        font-weight: 500;
    }
    .profile__for--container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 2rem;
        margin: 0.8rem 0rem;
        color: #4A4A4A;
    }
    .profile__for--input {
        width: 80%;
        border: none;
        outline: none;
        font-size: 1.7rem;
        font-weight: 400;
        padding-bottom: 0.4rem;
    }
    .__border {
        border-bottom: 0.2rem solid #00BFA5 !important;
    }
    .profile__for--icon {
        width: 10%;
        font-size: 1.7rem;
        text-align: right;
        color: rgba(0,0,0,0.3);
        cursor: pointer;
    }
`

export default StyledProfileForm;