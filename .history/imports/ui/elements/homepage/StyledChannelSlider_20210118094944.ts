import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledChannelSlider = styled.div`

.all-channels {
  width: 100%;
}

  .all-channels__title{
    margin: 40px 0 35px;

  }

  .all-channels__container{
    position: relative;
    width: 100%;
  }

    .all-channels__container-slider {
      width: 100%;
    }

    .all-channels__container-slider-prev-arrow {
      font-size: 20px;
      position: absolute;
      right: 100px;
      top: -51px;
    }

      .all-channels__container-slider-prev-arrow:hover fas fa-arrow-left {
        border-solid: 4px;
        border-radius: 4px;
        border-color: #28B992;
      }

    .all-channels__container-slider-next-arrow {
      font-size: 20px;
      position: absolute;
      right: 48px;
      top: -51px;
    }

    .all-channels__container-slider-next-arrow:hover {
        border-solid: 4px;
        border-radius: 4px;
        border-color: #28B992;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        .all-channels__container {
          position: relative;
        }
    }
`;
export default StyledChannelSlider;

