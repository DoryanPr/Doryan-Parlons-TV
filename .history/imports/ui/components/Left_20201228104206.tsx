import React from 'react';
import { Meteor } from 'meteor/meteor';

import StyledLeft from '../elements/StyledLeft';
import Header from './Header';
import Avatar from './Avatar';
import Status from './Status';
import Searchbar from './Searchbar';
import ChatList from './ChatList';

const icons: string[] = [
    
    {
        name: "circle-notch",
        func: () => { }
    },
    {
        name: "paperclip",
        func: () => { handlePaperClick() }
    },
    {
        name: "ellipsis-v",
        func: () => { }
    }
    "circle-notch", "comment-alt", "ellipsis-v"]

const Left = (props: any): JSX.Element => {
    const { chats, onChatClick, selectedChat } = props;
    return (
        <StyledLeft>
            <Header icons={icons} iconClass="greyIcon">
                <Avatar avatar_url={Meteor.user().profile.picture} />
            </Header>
            <Status />
            <Searchbar />
            <ChatList
                chats={chats}
                onChatClick={onChatClick}
                selectedChat={selectedChat}
            />
        </StyledLeft>
    )
}
export default Left;