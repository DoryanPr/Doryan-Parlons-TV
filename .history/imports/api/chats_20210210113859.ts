import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Chat } from './models';
import moment from 'moment';

export const ChatsCollection = new Mongo.Collection<Chat>('chats');



export const dummyChats: Chat[] = [
    {
        title: "",
        _id: "",
        picture: "",
        channelId: "1",
        participants: ["MygTsSuoYMdq3hCc4", "jnFRvAZYWZbxWZyMm"],
        lastMessage: {
            content: "Salut ça va ?",
            createdAt: moment()
                .toDate()
        }
    },
    {
        title: "",
        _id: "",
        picture: "",
        channelId: "",
        participants: ["239PfLkiagRGpcXKv", "YcXoGvdnrtgNWP6kj"],
        lastMessage: {
            content: "Salut comment tu vas ?",
            createdAt: moment()
                .subtract(1, 'days')
                .toDate()
        }
    },
    {
        title: "",
        _id: "",
        picture: "",
        channelId: "",
        participants: ["MygTsSuoYMdq3hCc4", "wkiQtRCm66WvrQpsA"],
        lastMessage: {
            content: "Hello !! ?",
            createdAt: moment()
                .subtract(2, 'days')
                .toDate()
        }
    }
]
if (Meteor.isServer) {
    Meteor.publish('chats.all', function () {
        return ChatsCollection.find();
    });
    Meteor.publish('chats.mine', function () {
        return ChatsCollection.find({
            participants: {
                $in: [this.userId]
            }
        })
    })
}
