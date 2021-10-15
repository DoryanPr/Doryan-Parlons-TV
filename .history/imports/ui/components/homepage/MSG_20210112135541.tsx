import React from 'react';
import FontAwesome from 'react-fontawesome';


/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Msg = (props: any): JSX.Element => {

    return (
        <a href="/chats" className="msg-link" >
            <FontAwesome name="user-friends" classname="msg-icon" />
            Mes amis
        </a>
    )
}

export default Msg;