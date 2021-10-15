import React from 'react';
import { Meteor } from 'meteor/meteor';
import HeaderBody from '../homepage/HeaderBody';
import StyledShowMSG from '../../elements/homepage/StyledShowMSG';
import MessagesList from './MessagesList';
import moment from 'moment';
import { Chat, MessageType, User } from '../../../api/models';
import { ChatsCollection } from '../../../api/chats';
import _ from 'lodash';
import { withTracker } from 'meteor/react-meteor-data';
import { findChat, findOtherId, findOtherUser } from '../../../api/helpers';
import RightMessages from './RightMessages';
import StyledNoConnected from '../../elements/friends/StyledNoConnected';
import NoConnected from '../friends/NoConnected';



const ShowMSG = (props: any): JSX.Element => {

    const handleUIClick = (otherUserId: string, name: string, picture: string): void => {
        const chat: Chat = ChatsCollection.findOne({
            participants: {
                $all: [otherUserId, Meteor.userId()]
            }
        });
        const chatId: string = ChatsCollection.insert({
            participants: [otherUserId, Meteor.userId()],
            lastMessage: {
                content: "",
                createdAt: moment().toDate(),
                type: MessageType.TEXT
            }
        })
    }

    return (
        Meteor.user() == null ? (
            <StyledNoConnected>
                <NoConnected />
            </StyledNoConnected>
        ) : (

                <StyledShowMSG>
                    <div className="homepage-show">
                        {/*<HeaderBody
                onSearch={handleUSearch}
            />*/}
                        {!props.loading ? (
                            <RightMessages
                                chats={props.chats}
                                onUserItemClick={handleUIClick}

                            />
                        ) : "loading"}
                    </div>
                </StyledShowMSG>
            )
    )
}

export default withTracker(() => {
    console.log(findChat(), ' find chat');
    const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
    const messagesReady: boolean = Meteor.subscribe('message.all').ready();
    const otherId = Meteor.subscribe('chats.all');

    return {
        loading: chatsReady && messagesReady ? false : true,
        chats: findChat(),

    }
})(ShowMSG);