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
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 1px 0px 4px #ff6457;
        display: flex;
        width: 100%;
    }

        .chat__messages-edit-picture {
            margin-right: 10px;
        }

        .chat__messages-edit-input {
            border: none;
            height: 36px;
            padding: 0 10px;
            width: 100%;
        }

        .chat__messages-edit-send {
            border: none;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
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
        },
        .chat__messages-edit-gif :hover {
            color: #ff6457;
        },
        .chat__messages-edit-picture:hover {
            color: #ff6457;
        }
`

export default StyledMessageEdit;