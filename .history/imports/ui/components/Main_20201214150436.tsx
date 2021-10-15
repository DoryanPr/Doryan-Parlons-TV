import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Left from './Left';
import Right from './Right';
import StyledMain from '../elements/StyledMain';
import { findChat } from '../../api/helpers';

const Main = (props: any): JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.mine');
       // console.log('chats', findChat());
    })

    const handleChatClick = (_id:string):void => {}

    return (
        <StyledMain>
            <Left chats={findChat()} onChatClick={handleChatClick}/>
            <Right right messageVisible={false}/>
        </StyledMain>
    )
}

export default Main;