import styled from 'styled-components';


const StyledMessageView = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh

    .message-view__messages {
        width: 70%;
    }

    .message-view__stories {
        background: #ddd;
        width: 15%;
    }

    .message-view__channels {
        background: black;
        width: 15%;
    }

`

export default StyledMessageView;