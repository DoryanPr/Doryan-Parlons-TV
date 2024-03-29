import styled from 'styled-components';
import React from 'react';

import { bool, func } from 'prop-types';
import  StyledBurger  from '../../elements/layout/StyledBurger';


const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default Burger;