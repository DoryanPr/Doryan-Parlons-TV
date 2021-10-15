import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Channel } from './models';
import { Chat } from './models';
import ChatAvatar from '../ui/components/chats/ChatAvatar';
import moment from 'moment';




export const DummyChannelsChat: Channel[] = [

    {
        _id: "1",
        name: 'TF1',
        logo: '/images/tf1.jpg',
        link: 'tf1',
        viewers: 175,
        messages: 3336,
        hashtags: ['#koh-lanta', '#The Voice'],
       
    }, {
        _id: "2",
        name: 'France 2',
        logo: '/images/france2.png',
        link: 'france2',
        viewers: 355,
        messages: 320,
        hashtags: ['#Fort Boyard'],
       
    }, {
        _id: "3",
        name: 'France 3',
        logo: '/images/france3.png',
        link: 'france3',
        viewers: 235,
        messages: 489,
        hashtags: ['#Thalassa'],
       
    }, {
        _id: "4",
        name: 'Canal+',
        logo: '/images/canal+.png',
        link: 'canal+',
        viewers: 105,
        messages: 251,
        hashtags: ['#Braquo'],
        
    }, {
        _id: "5",
        name: 'France 5',
        logo: '/images/france5.png',
        link: 'france5',
        viewers: 105,
        messages: 15280,
        hashtags: ['#La Quotidienne'],
        
    }, {
        _id: "6",
        name: 'M6',
        logo: '/images/m6.png',
        link: 'm6',
        viewers: 325,
        messages: 10000,
        hashtags: ['#Scène de ménages'],
       
    }, {
        _id: "7",
        name: 'Arte',
        logo: '/images/arte.png',
        link: 'arte',
        viewers: 105,
        messages: 300,
        hashtags: ['#Karambolage'],
        
    }, {
        _id: "8",
        name: 'C8',
        logo: '/images/c8.png',
        link: 'C8',
        viewers: 52,
        messages: 1000,
        hashtags: ['#William'],
        
    }

]

export const ChannelsCollection = new Mongo.Collection<Channel>('channel');

if (Meteor.isServer) {
    Meteor.publish('channel.all', function () {
        return ChannelsCollection.find({}, {
            fields: { services: 0}
        });
    });

    Meteor.methods({
        "channel.insert": function (channel) {
            return ChannelsCollection.insert(channel);
        },
        "channel.update": function (_id: string, content: string) {
            return ChannelsCollection.update({ _id }, {
                $set: {
                    content
                }
            })
        }
    })
}