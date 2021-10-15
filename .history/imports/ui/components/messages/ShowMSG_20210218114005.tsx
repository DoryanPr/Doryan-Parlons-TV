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



const ShowMSG = (props: any): JSX.Element => {


    const [messageVisible, setMessageVisible] = React.useState<boolean>(false);
    const [selectedChat, setSelectedChat] = React.useState<Chat>({});
    const [pattern, setPattern] = React.useState<string>("");
    const [users2, setUsers] = React.useState<User[]>([]);



    const handleChatClick = (_id: string): void => {
        // console.log('selected chat before', selectedChat)
        /* if (!messageVisible) {
            setMessageVisible(true);
        } */
        // const newChat: Chat = _.find(props.chats, { _id })
        // console.log('selected chat after', newChat);
        /* if (newChat) {
            setSelectedChat(newChat);
        } else {
            const newChat: Chat = ChatsCollection.findOne(_id);
            setSelectedChat(newChat);
        } */

    }

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
    /*
        const handleUSearch = (pattern: string): void => {
            setPattern(pattern);
            setUsers(Meteor.users.find({
                _id: { $ne: Meteor.userId() },
                name: { $regex: pattern, $options: 'i' }
            }, {
                sort: {
                    name: 1
                }
            }).fetch());
        }
    */
    return (
        <StyledShowMSG>
            <div className="homepage-show">
                {/*<HeaderBody
                onSearch={handleUSearch}
                />*/}
                {!props.loading ? (
                    <RightMessages
                        chats={props.chats}
                        onUserItemClick={handleUIClick}
                        message={props.message}
                    />
                ) : "loading"}
            </div>
        </StyledShowMSG>
    )
}

export default withTracker((match) => {
    
    console.log(findChat(), ' find chat');
    Meteor.subscribe('chats.all');
    const chatsReady: boolean = Meteor.subscribe('chats.mine').ready();
    const messagesReady: boolean = Meteor.subscribe('message.all').ready();
    const otherId = ChatsCollection.findOne(
        participants: [otherId, Meteor.userId()],
       
    })
    
    return {
        loading: chatsReady && messagesReady ? false : true,
        chats: findChat(),
        
        message: findOtherId(otherIds)
    }
})(ShowMSG);