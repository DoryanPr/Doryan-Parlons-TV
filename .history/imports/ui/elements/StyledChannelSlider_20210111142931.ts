import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledChannelSlider = styled.div`

    .channel-slider__item {
    border: none;
    width: 100px;
    transition: transform .2s;
  }
    .channel-slider__item: hover {
      transform: scale(1.2);
      text-decoration: none;
    }

      .channel-slider__card-header {
        align-items: center;
        background-color: #1F1D24;
        border: solid 1px #5A5A5D;
        border-radius: 5px;
        display: flex;
        height: px;
        padding: 12px;
      }

      .channel-slider__card-body {

      }

        .channel-slider__card-body-title {

        }

        .channel-slider__card-body-text {
        }

`;
export default StyledChannelSlider;

