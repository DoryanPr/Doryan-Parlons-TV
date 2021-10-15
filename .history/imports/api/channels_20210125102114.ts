import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Channel } from './models';
import { ImagesCollection } from './images';
import moment from 'moment';
import { DummyMessages } from './messages';
import { Message, MessageType } from './models';
import { MessagesCollection } from './messages';


const channels = [
    { name: 'TF1', logo: '/images/tf1.jpg', link: 'tf1', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
    { name: 'France 2', logo: '/images/france2.png', link: 'france2', viewers: 105, messages: 30000, hashtags: ['#hashtag3'] },
    { name: 'France 3', logo: '/images/france3.png', link: 'france3', viewers: 105, messages: 30000, hashtags: ['#hashtag4', '#hashtag5'] },
    { name: 'Canal+', logo: '/images/canal+.png', link: 'canal+', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
    { name: 'France 5', logo: '/images/france5.png', link: 'france5', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
    { name: 'M6', logo: '/images/m6.png', link: 'm6', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
    { name: 'Arte', logo: '/images/arte.png', link: 'arte', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
    { name: 'C8', logo: '/images/c8.png', link: 'C8', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] }
];

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
        name: 'TF1',
        logo: '/images/tf1.jpg',
        link: 'tf1',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1', '#hashtag2']
    }, {
        name: 'France 2',
        logo: '/images/france2.png',
        link: 'france2',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag3']
    }, {
        name: 'France 3',
        logo: '/images/france3.png',
        link: 'france3',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag4', '#hashtag5']
    }, {
        name: 'Canal+',
        logo: '/images/canal+.png',
        link: 'canal+',
        viewers: 105, messages: 30000, hashtags: ['#hashtag1']
    },
    { name: 'France 5', logo: '/images/france5.png', link: 'france5', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
    { name: 'M6', logo: '/images/m6.png', link: 'm6', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] },
    { name: 'Arte', logo: '/images/arte.png', link: 'arte', viewers: 105, messages: 30000, hashtags: ['#hashtag1'] },
    { name: 'C8', logo: '/images/c8.png', link: 'C8', viewers: 105, messages: 30000, hashtags: ['#hashtag1', '#hashtag2'] }

    
]

