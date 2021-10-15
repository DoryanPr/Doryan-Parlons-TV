import { Meteor } from 'meteor/meteor';
import { createDummyUsers, createDummyChats, createDummyMessages } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';
import { ChatsCollection, dummyChats } from '../imports/api/chats';
import { MessagesCollection, DummyMessages } from '../imports/api/messages';

import { AccountsReact } from 'meteor/meteoreact:accounts'

import '/imports/both/startup'
import './config/service-config'
import { ChannelsCollection } from '../imports/api/channels';

Meteor.startup(() => {
    // const users = Meteor.users;
    // console.log(users);
    // const numberOfUsers: number = Meteor.users.find().count();
    // const numberOfChats: number = ChatsCollection.find().count();
    // const numberOfMessages: number = MessagesCollection.find().count();
    //const numberOfChannels: number = ChannelsCollection.find().count();

    // console.log(numberOfChannels, "nombre de Channels");

    //console.log(MessagesCollection.find().fetch());
    
    if (numberOfUsers === 0) {
        console.log("Il n'y a pas d'utilisateur");
        createDummyUsers(dummyUsers);
    } else {
        console.log("Il y'a des utilisateurs");
    }

    if (numberOfChats === 0) {
        console.log("Il n'y a pas de chats");
        createDummyChats(dummyChats);
    } else {
        console.log("Il y'a des chats");
    }

    if (numberOfMessages === 0) {
        console.log("Il n'y a pas de messages");
        createDummyMessages(DummyMessages);
    } else {
        console.log("Il y'a des messages");
    }
    */
});
