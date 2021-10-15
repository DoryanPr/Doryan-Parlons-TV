import styled from 'styled-components';

const StyledMessageBoxItem = styled.div`

    .chat__messages-box-item-message-content {

        background-color: #02A592;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        height: 20px;
        padding: 3px;
        width: 40%;
    }

    .chat__messages-box-item-message-since {
        font-size: 14px;
        font-weight: bold;
        opacity: 60%
    }
`

export default StyledMessageBoxItem;