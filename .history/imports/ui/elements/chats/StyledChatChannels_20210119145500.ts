import styled from 'styled-components';

const StyledChatChannels = styled.div`

    width: 100%;
    padding: 12%;
    background: linear-gradient(#2AB992, #02A592);

    .chat-channels__link {
        
    }
        
        .chat-channels__link:hover {
            text-decoration: none;
            transform: scale(1.2);
        }


    .chat-channels__card {
        border: none;
        margin-bottom: 10px;
    }

        .chat-channels__card-header {
            align-items: center;
            background-color: #1F1D24;
            border: solid 1px #5A5A5D;
            border-radius: 5px;
            display: flex;
            height: 125px;
            padding: 12px;
        }

        .chat-channels__card-body {
            
        }

            .chat-channels__card-body-title {
                color: black;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 5px;
                transition: all 0.5s;
            }

    .chat-channels__card-header {

    }
`

export default StyledChatChannels;