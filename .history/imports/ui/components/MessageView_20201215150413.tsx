import React from 'react';
import { Tracker } from 'meteor/tracker';
import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';
import Footer from './Footer';
import MessageBox from './MessageBox';

import { Chat, Message } from '../../api/models';


const icons: string[] = ["search", "paperclip", "ellispsi-v"];

const MessageView = (props: any): JSX.Element => {
    const selectedChat: Chat = props.selectedChat;
    let messages: Message[];

    Tracker.autorun(() => {
        messages = MessagesCollection.find({chatI})
    })
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox />
            <Footer />
        </StyledMessageView>
    )
}

export default MessageView;