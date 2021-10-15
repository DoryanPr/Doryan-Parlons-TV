import styled from 'styled-components';



const StyledUserItem = styled.div`

    display: flex;
    padding: 10px;
   

    .chat--content--avatar {
        margin-top: auto;
        margin-bot: auto;
    }

    .chat--content-container {
        border-bottom: none;
        display: flex;
        flex-direction: column;
        position: relative;
        margin-left: 10px;
    }
    .__divider {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 0.1rem;
        background: #f2f2f2;
    }

        .chat--content-container-line1 {

        }

        .chat--content-container-title {
            color: #1a213f;
            font-size: 22px;
            font-weight: bold;
        }

        .chat--content-container-line2 {

        }

        .chat--content-friend {
            border-radius: 5px;
            border: none;
            color: green;
            height: 40px;
            width: 40px;
            margin-left 10px;
            font-size: 20px;

        }

        chat--content-remove-friend {

        }
        
        .fas fa-check-circle {
            font-size: 20px;
        }
        

        .chat--content-container-message {
            font-size: 12px;
        }

        .chat--content-add-friend {
            background-color: #ff6457;
            color: #1a213f;
            border-radius: 5px;
            border: none;
            height: 40px;
            width: 40px;
            margin-left 10px;
            font-size: 20px;

        }

        .chat--content-send-message {
            background-color: #ff6457;
            color: #1a213f;
            border-radius: 5px;
            border: none;
            height: 40px;
            width: 40px;
            margin-left 10px;
            font-size: 20px;
        }
`

export default StyledUserItem;