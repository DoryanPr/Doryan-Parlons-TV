import styled from 'styled-components';


const StyledMessageView = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 10px 0 25px;
    width: 100%;
    
    @media (max-width: ${({ theme }) => theme.mobile && theme.tablet}) {
        flex-direction: column-reverse;
    }

    .message-view__messages {
        width: 80%;

        @media (max-width: ${({ theme }) => theme.mobile && theme.tablet}) {
            width: 100%;
        }
    }

    .message-view__stories {
        background: #f8f8f8;
        width: 30%;

        @media (max-width: ${({ theme }) => theme.mobile && theme.tablet}) {
            width: 100%;
        }
    }

    .message-view__channels {
        background-color: #f8f8f8;
        width: 20%;

        @media (max-width: ${({ theme }) => theme.mobile && theme.tablet}) {
            width: 100%;
        }
    }



`

export default StyledMessageView;