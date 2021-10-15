import styled from 'styled-components';

const StyledMessageBoxItem = styled.div`
    .chat__messages-box-item {
        margin: 10px 0 10px 0;
    }

        .chat__messages-box-item-message {
            p {
                margin-bottom: 0;
            }
        }

        

            .chat__messages-box-item-message-content {

                background-color: white;
                border: none;
                border-radius: 5px;
                color: white;
                font-size: 14px;
                height: 22px;
                padding: 4px;
                width: 40%;

                p {
                    margin-bottom: 0;
                }
            }

            .chat__messages-box-item-message-name {

            }

            .chat__messages-box-item-message-since {
                font-size: 12px;
                font-weight: bold;
                opacity: 60%;
            }
    `

export default StyledMessageBoxItem;