import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledChannelSlider = styled.div`

.all-channels {}

  .all-channels__title{
    margin: 40px 0 35px;

  }

  .all-channels__container{
    position: relative;
  }

    .all-channels__container-slider {
    
    }

    .all-channels__container-slider-prev-arrow {
      position: absolute;
      right: 100px;
      top: -51px;
    }

    .all-channels__container-slider-next-arrow {
      position: absolute;
      right: 120px;
      top: -51px;
    }
`;
export default StyledChannelSlider;

