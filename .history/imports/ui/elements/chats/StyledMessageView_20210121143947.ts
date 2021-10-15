import styled from 'styled-components';


const StyledMessageView = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 10px 0 25px;
    width: 100%;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column-reverse;
    }

    .message-view__messages {
        width: 70%;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }

    .message-view__stories {
        background: #ddd;
        width: 15%;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }

    .message-view__channels {
        background-color: white;
        width: 15%;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            width: 100%;
        }
    }



`

export default StyledMessageView;