import styled from 'styled-components';

const StyledMessageEdit = styled.div`
    bottom: 0;
    left: 0;
    margin-top: auto;
    position: absolute;
    right: 0;

    .chat__messages-edit {
        align-items: center;
        background-color: white;
        border: solid 2px rgb(239, 239, 239);
        box-shadow: 1px 0npx 1px #ff6457;
        display: flex;
        padding-left: 15px;
        width: 100%;
    }

        .chat__messages-edit-picture {
            margin-right: 10px;
        }

        .chat_message-edit-form {
            display: flex;
            width: 100%;
        }

        .chat_message-edit-form:focus {
            outline: none;
        }

            .chat__messages-edit-form-input {
                border: none;
                font-size: 15px;
                height: 36px;
                padding: 0 10px;
                width: 100%;
            }

            .chat__messages-edit-form-input:focus {
                outline: none;
            }

            .chat__messages-edit-form-send {
                border: none;
                color: #00b7ff;
                font-size: 24px;
                margin-left: auto;
                padding: 0 10px;
            }

        .chat__messages-edit-smileys,
        .chat__messages-edit-gif,
        .chat__messages-edit-picture {
            background-color: white;
            cursor: pointer;
            font-size: 20px;
            margin-right: 10px;
            opacity: 60%;
        }

        .chat__messages-edit-smileys:hover {
            color: #ff6457;
        }

        .chat__messages-edit-gif:hover {
            color: #ff6457;
        }

        .chat__messages-edit-picture:hover {
            color: #ff6457;
        }

            .chat__messages-edit-gif-container {
                position: absolute;
                width: 460px;
                height: 300px;
                overflow-y: scroll;
                bottom: 60px;
                background: white;
                padding: 30px;
                z-index: 10000;

            }
`

export default StyledMessageEdit;