import React from 'react';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';

const icons: string[] = ["search", "paperclip", "ellispsi-v"];

const MessageView = (props: any): JSX.Element => {
    return(
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url/>

            </Header>
        </StyledMessageView>
    )
}

export default MessageView;