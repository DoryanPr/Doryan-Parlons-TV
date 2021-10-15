import React from 'react';

import StyleRight from '../elements/StyledRight';
import RightImg from './RightImg';
import MessageView from './MessageView';

const messageText:string = "WhatsApp se connecte a votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau wifi"
const Right = (props: any): JSX.Element => {
    return (
        <StyleRight>
            {props.messageVisible ? (
                <MessageView
            ): (
                <RightImg right={props.right} messageText={messageText}/>
                    
            )}
        </StyleRight>
    )
}

export default Right;