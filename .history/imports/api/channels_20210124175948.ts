import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Channel } from './models';
import { ImagesCollection } from './images';
import moment from 'moment';
import { DummyMessages } from './messages';


export const DummyChanelsChat: Channel[] = [

    

    {
        _id: "1",
        title: "TF1",
        participants: [],
        lastMessage: {
            content: "Salut ça va ?",
            createdAt: moment()
                .toDate()
        }
    }
]

