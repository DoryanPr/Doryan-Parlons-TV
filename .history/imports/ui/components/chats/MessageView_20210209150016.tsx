import React from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import StyledMessageView from '../../elements/chats/StyledMessageView';
import { Message, MessageType } from '../../../api/models';
import { ChannelsCollection } from '../../../api/channels';
import { findTwentyLastMessage } from '../../../api/helpers';
import { uploadFile } from '../../../api/helpers';
import Messages from './Messages';
import Stories from './Stories';
import ChatSlider from './ChatSlider';
import StyledChatSlider from '../../elements/chats/StyledChatSlider';
import { MessagesCollection } from '../../../api/messages';


let fileInput: any;

const MessageView = (props: any): JSX.Element => {

    const { onUpload } = props;

    // Permet de créer un State pour le modal
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    // permet d'afficher l'image dans le modal
    const [selectedImage, setSelectedImage] = React.useState<any>("")


    const handleInputClick = (): void => {
        const myInput: HTMLElement = document.getElementById('fileUpload');
        console.log('click ok', myInput);
        myInput.click();

    }


    // Afficher les informations des msg envoyé
    // Si le msg est de type image je crée un content vide de type image

    const handleSend = (content: string, type: MessageType, fileInput): void => {
        console.log(content, "content");
        const message: Message = {
            chatId: props.channel._id,
            content,
            createdAt: moment().toDate(),
            sender: Meteor.user(),
            type,
            read: false
        }
        /*
        if (gifVisible) {
            handleClose();
        }
        */
        // J'insere le msg et dés qu'il est inséré je vais dans le bloc else
        Meteor.call('message.insert', message, (err, id) => {
            if (err) {
                console.log('err insert msg', err);
            } else {
                //j'appel la méthode uploadFile et immédiatement tracker.autorun sera éxecuter une premiere fois
                // Puis dés que Session.set (helpers.ts), = url, le tracket.autoru sera invalide
                //re exécuter l'opération et imageUrl = url et ça mettra a jour le msg
                console.log('res id', id);
                uploadFile(fileInput, true);
                Tracker.autorun(() => {
                    const imageUrl: string = Session.get('wwc__imageUrl');
                    if (imageUrl && message.type === "image") {
                        Meteor.call('message.update', id, imageUrl, (err, res) => {
                            if (err) {
                                console.log('err', err);
                            } else {
                                console.log('ok', res);
                            }
                        });
                    }
                })
            }
        })
    }

    return (

        <StyledMessageView>
            <div className="message-view__messages">
                <Messages
                    selectedChat={props.channel}
                    messages={props.messages}
                    onSend={handleSend}
                    onUpload={handleSend}
                />
            </div>
            <div className="message-view__stories">
                <Stories></Stories>
            </div>
            <div className="message-view__channels">
                <StyledChatSlider>
                    <ChatSlider />
                </StyledChatSlider>
            </div>
        </StyledMessageView>
    )
}

export default withTracker(({ match, selectedChat }) => {


    Meteor.subscribe('channel.all');
    Meteor.subscribe('message.all');
    const channel = ChannelsCollection.findOne({ link: match.params.channel }); // on récupère la chaine dans notre collection à l'aide de la colonne "link" que l'on a dans notre api


    return {
        channel: channel,
        messages: channel ? findTwentyLastMessage(channel) : [],
        messagesUsers: MessagesCollection.find({ chatId: selectedChat._id }).fetch()


    }
})(MessageView);
