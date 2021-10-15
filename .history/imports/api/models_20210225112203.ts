

export interface Profile {
    phone?: string;
    picture?: string;
    actu?: string;
    name?: string;
    friends?: string[];
}

export interface User {
    _id?: string;
    password?: string;
    profile?: Profile; 
}

export interface Chat {
    _id?: string;
    participants?: string[];
    lastMessage?: Message;
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
}

export interface Message {
    _id?: string;
    chatId?: string;
    content?: string;
    createdAt?: Date;
    type?: MessageType;
    ownership?: string;
    sender?: User;
    senderId?: User["_id"];
    read?: boolean;
    isPrivate?: boolean;
}

export enum MessageType {

    TEXT = 'text',
    IMAGE = 'image',
    EMOJI = 'emoji',
}