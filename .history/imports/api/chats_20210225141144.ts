import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

export const ChatsCollection = new Mongo.Collection<Chat>('chats');



export const dummyChats: Chat[] = [
    {
        _id: "fdqsfds",
        participants: ["YcXoGvdnrtgNWP6kj", "jnFRvAZYWZbxWZyMm"],
        lastMessage: {
            content: "Salut ça va ?",
            createdAt: moment()
                .toDate()
        }
    },
    {
        _id: "gregerger",
        participants: ["239PfLkiagRGpcXKv", "YcXoGvdnrtgNWP6kj"],
        lastMessage: {
            content: "Salut comment tu vas ?",
            createdAt: moment()
                .subtract(1, 'days')
                .toDate()
        }
    },
    {
        _id: "dsfqdsfq",
        participants: ["YcXoGvdnrtgNWP6kj", "wkiQtRCm66WvrQpsA"],
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
    });

    Meteor.methods({
        "chats.insert": function (chat) {
            return ChatsCollection.insert(chat);
        }
    })
}
