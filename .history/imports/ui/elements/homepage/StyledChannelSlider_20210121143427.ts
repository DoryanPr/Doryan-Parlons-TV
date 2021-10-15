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
      align-items: center;
      border: solid 3px black;
      border-radius: 100%;
      display: flex;
      font-size: 20px;
      height: 40px;
      justify-content: center;
      padding: 4px;
      position: absolute;
      right: 100px;
      top: -57px;
      transition: all 0.3s;
      width: 40px;
    }

      .all-channels__container-slider-prev-arrow:hover {
        border-color: #ff6457;
        color: #ff6457;
        cursor: pointer;
      }

    .all-channels__container-slider-next-arrow {
      align-items: center;
      border: solid 3px black;
      border-radius: 100%;
      display: flex;
      font-size: 20px;
      height: 40px;
      justify-content: center;
      padding: 4px;
      position: absolute;
      right: 48px;
      top: -57px;
    }

    .all-channels__container-slider-next-arrow:hover {
        border: 3px;
        border-radius: 15px;
        box-shadow: 0 0 3px #ff6457, 0 0 4px #ff6457, 0 0 5px #ff6457;
        color: #ff6457;
      }

      
    }
`;
export default StyledChannelSlider;

