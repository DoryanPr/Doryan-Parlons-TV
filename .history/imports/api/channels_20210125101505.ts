import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Channel } from './models';
import { ImagesCollection } from './images';
import moment from 'moment';
import { DummyMessages } from './messages';
import { Message, MessageType } from './models';
import { }


if (Meteor.isServer) {
    Meteor.publish('message.all', function () {
        return MessagesCollection.find();
    });

    Meteor.methods({
        "message.insert": function (message) {
            return MessagesCollection.insert(message);
        },
        "message.update": function (_id: string, content: string) {
            return MessagesCollection.update({ _id }, {
                $set: {
                    content
                }
            })
        }
    })
}
export const DummyChanelsChat: Channel[] = [



    {
        _id: "1",
        title: "TF1",
        participants: [],
        lastMessage: {
            content: ,
            createdAt: moment()
                .toDate()
        }
    }
]

