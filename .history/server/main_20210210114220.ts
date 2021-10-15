import { Meteor } from 'meteor/meteor';
import { createDummyUsers, createDummyChats, createDummyMessages, createDummyChannels } from '../imports/api/helpers';
import { dummyUsers } from '../imports/api/users';
import { ChatsCollection, dummyChats } from '../imports/api/chats';
import { MessagesCollection, DummyMessages } from '../imports/api/messages';
import { ChannelsCollection, DummyChannelsChat } from '../imports/api/channels';



Meteor.startup(() => {
    // const users = Meteor.users;
    // console.log(users);
    const numberOfUsers: number = Meteor.users.find().count();
    const numberOfChats: number = ChatsCollection.find().count();
    const numberOfMessages: number = MessagesCollection.find().count();
    const numberOfChannels: number = ChannelsCollection.find().count();
    //console.log(MessagesCollection.find().fetch());
    if (numberOfUsers === 0) {
        console.log("Il n'y a pas d'utilisateur");
        createDummyUsers(dummyUsers);
    } else {
        console.log("Il y'a des utilisateurs");
    }

    //if (numberOfChats === 0) {
     //   console.log("Il n'y a pas de chats");
    //} else {
        createDummyChats(dummyChats);
        console.log("Il y'a des chats");
    }

    if (numberOfChannels === 0) {
        console.log("Il n'y a pas de channels");
        createDummyChannels(DummyChannelsChat);
    } else {
        console.log("Il y'a des channels");
    }

    if (numberOfMessages === 0) {
        console.log("Il n'y a pas de messages");
        createDummyMessages(DummyMessages);
    } else {
        console.log("Il y'a des messages");
    }
});
