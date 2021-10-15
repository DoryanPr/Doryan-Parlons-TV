import styled, { css } from 'styled-components';

const StyledChannelCard = styled.div`

  .all-channels__card {
    border: none;
    width: 100px;
    transition: transform .2s;
  }
    .all-channels__card:hover {
      transform: scale(1.2);
      
    }

      .all-channels__card-header {
        align-items: center;
        background-color: #1F1D24;
        border: solid 1px #5A5A5D;
        border-radius: 5px;
        display: flex;
        height: 125px;
        padding: 12px;
      }

      .all-channels__card-body {
       
      }
      
        .all-channels__card-body-title {
          color: black;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          transition: all 0.5s;
        }

        .all-channels__card-body-title: hover {
          color: #28B992;

        }

        .all-channels__card-body-text { 
          color: black;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.5;
        }
    
  .all-channels__link:hover {
    text-decoration: none;
  }

`;



export default StyledChannelCard;

