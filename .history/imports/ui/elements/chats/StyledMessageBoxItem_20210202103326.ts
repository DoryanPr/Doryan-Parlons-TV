import styled from 'styled-components';

const StyledMessageBoxItem = styled.div`
    .chat__messages-box-item {
        background-color: white;
        border: none;
        border-radius: 5px;
        margin: 10px 10px 10px 10px;
    }

        .chat__messages-box-item-message {
            p {
                margin-bottom: 0;
            }
        }

        .chat__messages-box-item-message-header{
            display: flex;
            justify-content: space-between;
        }
            
            .chat__messages-box-item-message-header-name {
                font-size: 12px;
                font-weight: bold;
                margin-left: 5px;
                opacity: 60%;
            }
            
            .chat__messages-box-item-message-header-since {
                font-size: 12px;
                font-weight: bold;
                margin-right: 5px;
                opacity: 60%;
            }

            .chat__messages-box-item-message-content {
                color: black;
                font-size: 14px;
                height: 22px;
                padding: 4px;
                width: 40%;
            }

                chat__messages-box-item-message-content-image {
                    height: 200px;
                    width: auto;
                }

            p {
                margin-bottom: 0;
            }
        }

    `

export default StyledMessageBoxItem;