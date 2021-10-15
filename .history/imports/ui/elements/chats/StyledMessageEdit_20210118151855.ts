import styled from 'styled-components';

const StyledMessageEdit = styled.div`
    .chat__messages-edit {
        align-items: center;
        display: flex;
        width: 100%;
        margin-top: 70%;
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
            color: #00b7ff;
            font-size: 24px;
            margin-left: auto;
            padding: 0 10px;
        }
s
        .chat__messages-edit-smileys,
        .chat__messages-edit-gif,
        .chat__messages-edit-picture {
            background-color: white;
            cursor: pointer;
            font-size: 20px;
            margin-right: 10px;
            opacity: 60%;
        }
`

export default StyledMessageEdit;