import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Channel } from './models';
import { ImagesCollection } from './images';
import moment from 'moment';
import { DummyMessages } from './messages';
import { Message, MessageType } from './models';
import { MessagesCollection } from './messages';


export const ChannelsCollection = new Mongo.Collection<Channel>('channel');





export const DummyChannelsChat: Channel[] = [

    {
        _id: "1",
        name: 'TF1',
        logo: '/images/tf1.jpg',
        link: 'tf1',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1', '#hashtag2']
    }, {
        _id: "2",
        name: 'France 2',
        logo: '/images/france2.png',
        link: 'france2',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag3']
    }, {
        _id: "3",
        name: 'France 3',
        logo: '/images/france3.png',
        link: 'france3',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag4', '#hashtag5']
    }, {
        _id: "4",
        name: 'Canal+',
        logo: '/images/canal+.png',
        link: 'canal+',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1']
    }, {
        _id: "5",
        name: 'France 5',
        logo: '/images/france5.png',
        link: 'france5',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1']
    }, {
        _id: "6",
        name: 'M6',
        logo: '/images/m6.png',
        link: 'm6',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1', '#hashtag2']
    }, {
        _id: "7",
        name: 'Arte',
        logo: '/images/arte.png',
        link: 'arte',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1']
    }, {
        _id: "8",
        name: 'C8',
        logo: '/images/c8.png',
        link: 'C8',
        viewers: 105,
        messages: 30000,
        hashtags: ['#hashtag1', '#hashtag2']
    };
    
    
    if (Meteor.isServer) {
        Meteor.publish('channel.all', function () {
            return ChannelsCollection.find();
        });
        
    }
]

console.log(DummyChannelsChat);

