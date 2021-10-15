import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';

const Main = (props: any): JSX.Element => {
    Tracker
    return (
        <StyledMain>
            <Left />
            <Right right />
        </StyledMain>
    )
}

export default Main;