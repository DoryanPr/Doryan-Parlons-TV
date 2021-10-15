import React from 'react';

// Styled Components
import StyledLeft from '../../elements/homepage/StyledLeft';

import Menu from './Menu';


const Left = ({ open, setOpen }): JSX.Element => {

    return (
        <StyledLeft >
            <Menu />
        </StyledLeft>
    )
}
export default Left;