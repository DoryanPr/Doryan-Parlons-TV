import React from 'react';
import StyledChatChannels from '../../elements/chats/StyledChatChannels';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ChatChannels = (props: any): JSX.Element => {

    return (
        <StyledChatChannels>
            <Col className="flex-grow-0">
                <a href={"/chats/" + props.link} className="chat-channels__link">
                    <Card className="chat-channels__card">
                        <div className="chat-channels__card-header">
                            <Card.Img variant="top" src={props.logo} />
                        </div>
                        <Card.Body className="chat-channels__card-body">
                            <Card.Title className="chat-channels__card-body-title">{props.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        </StyledChatChannels>
    )
}

export default ChatChannels;