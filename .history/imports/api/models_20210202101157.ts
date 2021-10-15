

export interface Profile {
    phone?: string;
    picture?: string;
    actu?: string;
    name?: string
}

export interface User {
    _id?: string;
    username?: string;
    password?: string;
    profile?: Profile;
}

export interface Chat {
    _id?: string;
    name?: string;
    picture?: string;
    participants?: string[];
    lastMessage?: Message;
    channelId?: string;

}

export interface Channel {
    _id?: string;
    hashtags?: string[];
    lastMessage?: Message;
    logo?: string;
    link?: string;
    messages?: number;
    name?: string;
    participants?: string[];
    viewers?: number;
    chat?: Chat;
}

export interface Message {
    _id?: string;
    chatId?: string;
    content?: string;
    createdAt?: Date;
    type?: MessageType;
    ownership?: string;
    sender?: User;
    read?: boolean;
}

export enum MessageType {

    TEXT = 'text',
    IMAGE = 'image'
}