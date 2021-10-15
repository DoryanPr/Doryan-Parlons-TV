import React from 'react';
import { Tracker } from 'meteor/tracker';
import moment from 'moment';

import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';
import Footer from './Footer';
import MessageBox from './MessageBox';

import { Chat, Message } from '../../api/models';
import { MessagesCollection } from '../../api/messages';



const icons: string[] = ["search", "paperclip", "ellispsi-v"];

const MessageView = (props: any): JSX.Element => {
    const selectedChat: Chat = props.selectedChat;
    let messages: Message[];

    Tracker.autorun(() => {
        console.log(MessagesCollection.find().fetch());
        messages = MessagesCollection.find({ chatId: selectedChat._id }).fetch();

    })
    const handleSend = (content:string):void => {
        const message:Message = {
            chatId: selectedChat._id,
            content,
            createdAt: moment().toDate(),
            senderId
        }
    }
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            <MessageBox messages={messages} />
            <Footer onSend={handleSend}/>
        </StyledMessageView>
    )
}

export default MessageView;