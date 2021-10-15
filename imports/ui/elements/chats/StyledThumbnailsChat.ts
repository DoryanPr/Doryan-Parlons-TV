import styled from 'styled-components';

const StyledThumbnailsChat = styled.div`

    .thumnails-chats {
      display: flex;
      flex-flow: wrap;
    }

      .thumnails-chats__title {
        margin: 5px;
      }

      .thumnails-chats__link {
        background: #1F1D24;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: solid 1px #5A5A5D;
        border-radius: 5px;
        display: block;
        height: 67px;
        margin: 10px 5px;
        width: calc(33% - 10px);
      }
`

export default StyledThumbnailsChat;