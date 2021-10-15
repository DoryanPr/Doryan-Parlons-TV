import styled from 'styled-components';



const StyledUserItem = styled.div`

    display: flex;
    padding: 15px;

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
            font-size: 14px;
            font-weight: bold;
        }

        .chat--content-container-line2 {

        }

        .chat--content-container-message {
            font-size: 12px;
        }

        .chat--content-add-friend {
            
        }
`

export default StyledUserItem;