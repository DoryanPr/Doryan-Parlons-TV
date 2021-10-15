import React from 'react';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';

const icons:string[]

const MessageView = (props: any): JSX.Element => {
    return(
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>


            </Header>
        </StyledMessageView>
    )
}

export default MessageView;