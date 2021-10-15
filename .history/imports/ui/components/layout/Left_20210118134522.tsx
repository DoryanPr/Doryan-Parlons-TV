import React from 'react';

// Styled Components
import StyledLeft from '../../elements/homepage/StyledLeft';

import Menu from './Menu';


const Left = ({ open, setOpen }): JSX.Element => {

    return (
        <StyledLeft open={open} onClick={() => setOpen(!open)} >
            <Menu />
        </StyledLeft>
    )
}
export default Left;