import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledChannelSlider = styled.div`

.chat-slider {
  width: 100%;
}

  .chat-slider__title{
    margin: 40px 0 35px;
  }

  .chat-slider__container{
    position: relative;
    width: 100%;
    padding: 0 10px
  }

    .chat-slider__container-slider {
      width: 100%;
    }

    .chat-slider__container-slider-prev-arrow {
      display: flex;
      font-size: 25px;
      justify-content: center;
      padding: 4px;
      position: relative;
    }

      .chat-slider__container-slider-prev-arrow:hover {
        color: #ff6457;
        margin: auto;
        width: 27px;
      }

    .chat-slider__container-slider-next-arrow {
      display: flex;
      font-size: 25px;
      justify-content: center;
      padding: 4px;
      position: relative;
    }

    .chat-slider__container-slider-next-arrow:hover {
        color: #ff6457;
        margin: auto;
        width: 27px;
      }
    }
`;
export default StyledChannelSlider;

