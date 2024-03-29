import React from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header';
import Avatar from './Avatar';
import Footer from './Footer';
import MessageBox from './MessageBox';
import Modal from './Modal';



import { Chat, Message, MessageType } from '../../api/models';
import { MessagesCollection } from '../../api/messages';

let fileInput: any;



const MessageView = (props: any): JSX.Element => {
    const icons: any[] = [
        {
            name: "search",
            func: ()=> {}
        },
        {
            name: "paperclip",
            func: () => {handlePaperClick()}
        },
        {
            name: "ellipsis-v",
            func: () => {}
        }
    ];
    const selectedChat: Chat = props.selectedChat;

    // Permet de créer un state et d'afficher les fabItem lors du click sur l'icone paperclip
    const [fabVisible, setFabVisible] = React.useState<boolean>(false);
    // Permet de créer un State pour le modal
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    // permet d'afficher l'image dans le modal
    const [selectedImage, setSelectedImage]= React.useState<string>("")
   
    const handlePaperClick = (): void => {
        setFabVisible(!fabVisible);
    }
    const handleInputClick = (): void => {
        const myInput: HTMLElement = document.getElementById('fileUpload');
        console.log('click ok', myInput);
        myInput.click();

    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        fileInput = e.target.files[0];
        console.log('fileInput', fileInput);
        if (fileInput) {
            setModalVisible(true);
            const fileReader: FileReader = new FileReader();
            fileReader.onload = function (e) {
                console.log('image')
            }
           // setSelectedImage(fileInput);
        }
    }
    const handleClose = (): void => {
        setModalVisible(false);
        setFabVisible(false);
    }
    const handleSend = (content: string): void => {
        const message: Message = {
            chatId: selectedChat._id,
            content,
            createdAt: moment().toDate(),
            senderId: Meteor.userId(),
            type: MessageType.TEXT,
            read: false
        }
        Meteor.call('message.insert', message, (err, res) => {
            if (err) {
                console.log('err insert msg', err);
            } else {
                console.log('res', res);
            }
        })
    }
    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={selectedChat.picture} />
                <div className="headerMsg--container">
                    <span className="headerMsg--title">{selectedChat.title}</span>
                    <span className="headerMsg--sbTitle">en ligne</span>
                </div>
            </Header>
            {modalVisible ? (
                <Modal
                    selectedImage={selectedImage}
                    onClose={handleClose}
                />
            ) : (
                    <React.Fragment>
                        <MessageBox
                            selectedChat={selectedChat}
                            messages={props.messages}
                            fabVisible={fabVisible}
                            onFABItemClick={handleInputClick}
                            onInputChange={handleInputChange}
                        />
                        <Footer onSend={handleSend} />
                    </React.Fragment>
            )}
        </StyledMessageView>
    )
}

export default withTracker(({ selectedChat})=> {
    return {
        messages: MessagesCollection.find({chatId: selectedChat._id}).fetch()
    }
})(MessageView);