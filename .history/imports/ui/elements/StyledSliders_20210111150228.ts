import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`

    .channel-slider__item {
    border: none;
    width: 325px;
    height: 250px;
    transition: transform .2s;
  }
    .channel-slider__item: hover {
      text-decoration: none;
    }

      .channel-slider__card-header {
        align-items: center;
        background-color: #1F1D24;
        border: solid 1px #5A5A5D;
        border-radius: 5px;
        display: flex;
        height: 200px;
        padding: 12px;
      }

      .channel-slider__card-body {

      }

        .channel-slider__card-body-title {

        }

        .channel-slider__card-body-text {
        }

        .channel-slider__card-body-hashtag {
          background-color: #28B992;
          display: flex;
          flex-direction: row;
          border: 1px;
          color: white;
        }

`;
export default StyledSlider;

