import React from 'react';
import { Meteor } from 'meteor/meteor';
import 
import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';

const Main = (props: any): JSX.Element => {

    return (
        <StyledMain>
            <Left />
            <Right right />
        </StyledMain>
    )
}

export default Main;