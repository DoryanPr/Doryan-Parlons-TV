import styled from 'styled-components';

const StyledMessageBoxItem = styled.div`
    .chat__messages-box-item {
        background-color: white;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content
        margin: 10px 0 10px 0;
    }

        .chat__messages-box-item-message {
            p {
                margin-bottom: 0;
            }
        }

        .chat__messages-box-item-message-header
        
            .chat__messages-box-item-message-header-name {
                font-size: 12px;
                font-weight: bold;
                opacity: 60%;
            }

            .chat__messages-box-item-message-header-since {
                font-size: 12px;
                font-weight: bold;
                opacity: 60%;
            }

        .chat__messages-box-item-message-content {

           
            color: black;
            font-size: 14px;
            height: 22px;
            padding: 4px;
            width: 40%;

            p {
                margin-bottom: 0;
            }
        }

    `

export default StyledMessageBoxItem;