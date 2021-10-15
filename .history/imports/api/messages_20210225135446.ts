import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import moment from 'moment';
import { Message, MessageType } from './models';

export const MessagesCollection = new Mongo.Collection<Message>('message');

if (Meteor.isServer) {
    Meteor.publish('message.all', function () {
        return MessagesCollection.find();
    });

    Meteor.methods({
        "message.insert": function (message) {
            return MessagesCollection.insert(message);
        },
        "message.update": function (_id: string, content: string) {

            console.log(content);

            return MessagesCollection.update({ _id }, {
                $set: {
                    content
                }
            })
        },
        "message.update.badges": function (chatId: string, otherId: string) {
            return MessagesCollection.update({
                chatId, sender: {_id:otherId}
            }, {
                $set: {
                    read: true
                }
            }, {
                multi: true
            })
        }
    });
}

export const DummyMessages: Message[] = [
    {
        chatId: "1",
        content: "Salut 1er message ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut 2e message ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut 3e message ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut 4e message ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut 5e message ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "2",
        content: "Salut 6e message ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "2",
        content: "Salut 7e message ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut 8e message ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut  ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "2",
        content: "a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "2",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "3",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "3",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "3",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "3",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "4",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "3",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
    {
        chatId: "1",
        content: "Salut a va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
    },
]