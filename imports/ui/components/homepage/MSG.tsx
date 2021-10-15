import React from 'react';
import FontAwesome from 'react-fontawesome';


const Msg = (props: any): JSX.Element => {

    return (
        <a href="/messages" className="msg-link" >
            <FontAwesome name="envelope" className="msg-icon" />
            Messages
        </a>
    )
}

export default Msg;