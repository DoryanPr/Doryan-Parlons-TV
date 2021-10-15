import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { User, Chat, Message, Channel } from './models';
import { Accounts } from 'meteor/accounts-base';
import { ChatsCollection } from './chats';
import { MessagesCollection } from './messages';
import { ImagesCollection } from './images';
import { ChannelsCollection } from './channels';




export const createDummyUsers = (users: User[]): void => {
    users.forEach(user => {
        const { profile, password } = user
        const username = profile.name

        Accounts.createUser({
            username,
            password,
            profile
        });
    });
}

export const createDummyChats = (chats: Chat[]): void => {
    chats.forEach(chat => {
        ChatsCollection.insert(chat);
    });
}
export const createDummyChannels = (channels: Channel[]): void => {
    channels.forEach(channel => {
        ChannelsCollection.insert(channel);
    });
}

export const createDummyMessages = (messages: Message[]): void => {
    messages.forEach(message => {
        MessagesCollection.insert(message);
    });
}

export const findChat = (): Chat[] => {

    const UId = Meteor.userId();
    console.log(UId, ' UserId');
    return ChatsCollection.find({ participants: UId }).fetch().map(chatCollection => {

        const otherUserId: string = findOtherId(chatCollection.participants);
        const { profile } = findOtherUser(otherUserId);
        const lastMessage: Message = findLastMessage(chatCollection._id);
        return {
            ...chatCollection,
            title: profile.name,
            picture: profile.picture,
            lastMessage: {
                ...lastMessage
            }
        }
    });
};

export const findOtherId = (participants: string[]): string => {
    const myId: string = Meteor.userId();
    let otherUserId: string;
    if (myId === participants[0]) {
        otherUserId = participants[1];
    } else {
        otherUserId = participants[0];
    }
    return otherUserId;
};

export const findOtherUser = (_id: string): User => {
    return Meteor.users.findOne({ _id })
}

const findLastMessage = (chatId: string): Message => {
    const Msg: Message[] = MessagesCollection.find({ chatId }, {
        sort: { createdAt: -1 }
    }).fetch();
    if (!Msg[0]) {
        return ChatsCollection.findOne(chatId).lastMessage;
    }
    return Msg[0];
}

export const uploadFile = (file: any, isMessage: boolean): void => {
    const fileUpload = ImagesCollection.insert({
        file,
        streams: "dynamic",
        chunkSize: "dynamic",
        allowWebWorkers: true
    }, false);

    // Start
    fileUpload.on('start', () => {
        console.log('start');
    })

    //End
    fileUpload.on('end', (err, fileObj) => {
        console.log('end', fileObj);
        if (err) {
            console.log('err upload', err);
        } else {
            const _id: string = fileObj._id;
            if (isMessage) {
                Meteor.call('images.url', _id, (err, url) => {
                    if (err) {
                        console.log('err', err);
                    } else {
                        console.log('url', url);
                        Session.set('wwc__imageUrl', url)
                    }
                })
            } else {
                Meteor.call('user.picture', _id, (err, url) => {
                    if (err) {
                        console.log('err', err);
                    } else {
                        console.log('url', url);
                    }
                })
            }
        }
    }
    )

    //Error
    fileUpload.on('err', (err, fileObj) => {
        console.log('err', err);
    })

    //Progress
    fileUpload.on('progress', (progress, fileObj) => {
        console.log('progress', progress);
    })
    fileUpload.start();
}

export const findChannels = (): Channel[] => {
    console.log(ChannelsCollection);
    return ChannelsCollection.find().fetch();
};

export const findTwentyLastMessage = (channel): Message[] => {
    return MessagesCollection.find({ chatId: channel._id }, { sort: { createdAt: -1 }, limit: 20 }).fetch();
    // avec limite 20 messages
    // Trier plus récent en bas
}

/*
export const onAddFriend2 = (props: any, user: any, id: any) => {

    props.onAddFriend(
        Meteor.userId(),
        Meteor.user().profile.friends ? Meteor.user().profile.friends.concat([id]) : [id]
    );

    props.onAddFriend(
        id,
        user.profile.friends ? user.profile.friends.push(Meteor.userId()) : [Meteor.userId()]
    );

}*/

export const getBadges = (chatId:string):number => {
    const participants: string[] = ChatsCollection.findOne(chatId).participants
    const otherId: string = findOtherId(participants);
    const badge: number = MessagesCollection.find({chatId, senderId: otherId, read: false}).
}

