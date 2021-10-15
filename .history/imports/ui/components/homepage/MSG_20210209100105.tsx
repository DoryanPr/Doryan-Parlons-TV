import React from 'react';
import FontAwesome from 'react-fontawesome';

/* Components */
import { Chat } from '../../../api/models';
import ChatItem from '../../components/old_version/ChatItem';

const Msg = (props: any): JSX.Element => {

    

    return (
        <a href="/messages" className="msg-link" >
            <FontAwesome name="envelope" className="msg-icon" />
            Mes messages
        </a>
    )
}

export default Msg;