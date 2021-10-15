import styled from 'styled-components';
import React from 'react';
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

export default Burger;