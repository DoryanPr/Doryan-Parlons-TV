import React from 'react';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';

const MessageView = (props: any): JSX.Element => {
    return(
        <StyledMessageView>
            <Header></Header>
        </StyledMessageView>
    )
}

export default MessageView;