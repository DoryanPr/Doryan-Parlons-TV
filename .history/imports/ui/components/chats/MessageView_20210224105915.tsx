import React from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import StyledMessageView from '../../elements/chats/StyledMessageView';
import { Message, MessageType } from '../../../api/models';
import { findTwentyLastMessage } from '../../../api/helpers';
import { uploadFile } from '../../../api/helpers';
import Messages from './Messages';
import ThumbnailsChat from './ThumbnailsChat';
import { ChatsCollection } from '../../../api/chats';
import { ChannelsCollection } from '../../../api/channels';
import { MessagesCollection } from '../../../api/messages';

const MessageView = (props: any): JSX.Element => {

    const handleSend = (content: string, type: MessageType, fileInput): void => {
        const message: Message = {
            chatId: props.channel._id,
            content,
            createdAt: moment().toDate(),
            sender: Meteor.user(),
            type,
            read: false,
            isPrivate: props.isPrivate
        }
        if (message.type === "text") {
            Meteor.call('message.insert', message)
        }
        else {
            Meteor.call('message.insert', message, (err, id) => {
                if (err) {
                    console.log('err insert msg', err);
                } else {
                    uploadFile(fileInput, true);
                    Tracker.autorun(() => {
                        const imageUrl: string = Session.get('wwc__imageUrl');
                        if (imageUrl && message.type === "image") {
                            Meteor.call('message.update', id, imageUrl);
                            }
                        })
                    }
                })
            }
    }
    return (

        <StyledMessageView>
            <div className="message-view__topbar">
                
            </div>
            <div className="message-view__messages">
                <Messages
                    selectedChat={props.channel}
                    messages={props.messages}
                    onSend={handleSend}
                    onUpload={handleSend}
                />
            </div>
            <div className="message-view__channels">
                <ThumbnailsChat otherChannels={props.otherChannels} />
            </div>
        </StyledMessageView>
    )
}

export default withTracker(({ match }) => {

    Meteor.subscribe('channel.all');
    Meteor.subscribe('message.all');
    Meteor.subscribe('chats.all');

    let channel = match.params.channel ?
     ChannelsCollection.findOne({ link: match.params.channel 
    }) : ChatsCollection.findOne({ _id: match.params.chat });

    let otherChannels = match.params.channel ? 
    ChannelsCollection.find({ link: { $ne: match.params.channel }
     }) : ChannelsCollection.find();

    return {
        channel:        channel,
        messages:       channel ? findTwentyLastMessage(channel) : [],
        otherChannels:  channel ? otherChannels : [],
        isPrivate:      match.params.channel ? false : true
    }
    
})(MessageView);
