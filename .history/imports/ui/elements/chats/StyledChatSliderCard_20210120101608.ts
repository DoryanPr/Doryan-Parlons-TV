import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`

  .chat-slider__link {}

  .chat-slider__link:hover {
    text-decoration: none;
  }

  .chat-slider__link:hover .chat-slider__card-body-informations-title {
    color: #28B992;
  }

  .chat-slider__item {
    border: none;
    width: 100%;
    height: 250px;
    transition: transform .2s;
  }

    .chat-slider__card-header {
      align-items: center;
      background-color: #1F1D24;
      border: solid 1px #5A5A5D;
      border-radius: 5px;
      display: flex;
      height: 200px;
      padding: 12px;
    }

      .chat-slider__card-header-logo {
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
        height: 100%;
        transition: all 0.5s;
        width: 100%;
      }

      .chat-slider__card-header-logo:hover {
        transform:scale(1.1);
      }

    .chat-slider__card-body {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
    }

      .chat-slider__card-body-informations {}

        .chat-slider__card-body-informations-title {
          color: black;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          transition: all 0.5s;
        }

        .chat-slider__card-body-informations-text {
          color: black;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.5;
        }

`;
export default StyledSlider;

