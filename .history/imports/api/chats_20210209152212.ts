import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Chat } from './models';
import moment from 'moment';

export const ChatsCollection = new Mongo.Collection<Chat>('chats');



export const dummyChats: Chat[] = [
    {
        title: "TF1",
        _id: "1",
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
        title: "France 2",
        _id: "2",
        picture: "",
        channelId: "2",
        participants: ["239PfLkiagRGpcXKv", "MygTsSuoYMdq3hCc4"],
        lastMessage: {
            content: "Salut comment tu vas ?",
            createdAt: moment()
                .subtract(1, 'days')
                .toDate()
        }
    },
    {
        title: {
            "France 3",
        }
        _id: "3",
        picture: "",
        channelId: "3",
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
