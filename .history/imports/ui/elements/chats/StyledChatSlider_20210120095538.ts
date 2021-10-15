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
  }

    .chat-slider__container-slider {
      width: 100%;
    }

    .chat-slider__container-slider-prev-arrow {
      font-size: 20px;
      padding: 4px;
      position: absolute;
      right: 100px;
      top: -51px;
    }

      .chat-slider__container-slider-prev-arrow:hover {
        border: 0;
        border-radius: 15px;
        box-shadow: 0 0 3px #28B992, 0 0 4px #28B992, 0 0 5px #28B992;
        color: #28B992;
      }

    .all-channels__container-slider-next-arrow {
      font-size: 20px;
      position: absolute;
      padding: 4px;
      right: 48px;
      top: -51px;
    }

    .all-channels__container-slider-next-arrow:hover {
        border: 3px;
        border-radius: 15px;
        box-shadow: 0 0 3px #28B992, 0 0 4px #28B992, 0 0 5px #28B992;
        color: #28B992;
      }

      
    }
`;
export default StyledChannelSlider;

