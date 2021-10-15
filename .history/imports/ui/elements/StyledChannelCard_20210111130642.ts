import styled, { css } from 'styled-components';

const StyledChannelCard = styled.div`

  .all-channels__card {
    border: none;
    width: 100px;
    transition: transform .2s;
  }
    .all-channels__card:hover {
      transform: scale(1.2);
      color-font: #24AF8D;
      text-decoration: none;
    }

      .all-channels__card-header {
        align-items: center;
        background-color: #1F1D24;
        border: solid 1px #5A5A5D;
        border-radius: 5px;
        display: flex;
        height: 125px;
        padding: 12px;
        text-decoration: none;
      }
`;



export default StyledChannelCard;

