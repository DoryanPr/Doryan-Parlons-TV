import styled from 'styled-components';
import React from 'react';
import  StyledBurger  from '../../elements/layout/StyledBurger';


const Burger = (props: any): JSX.Element => {
    return (
        <StyledBurger>
           <h1>LOGO</h1>
            <StyledHome>
                <Home />
            </StyledHome>
            <StyledMyFriends>
                <MyFriends />
            </StyledMyFriends>
            <StyledMSG>
                <Msg />
            </StyledMSG>
            <StyledAvatar>
                <Avatar />
            </StyledAvatar>
        </StyledBurger>
    )
}

export default Burger;
